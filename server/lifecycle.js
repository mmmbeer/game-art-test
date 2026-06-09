export function createRequestActivityTracker({ now = Date.now } = {}) {
  let activeRequests = 0;
  let lastActivityAt = now();

  function markActivity() {
    lastActivityAt = now();
  }

  function middleware(req, res, next) {
    activeRequests += 1;
    markActivity();

    let completed = false;
    const onComplete = () => {
      if (completed) {
        return;
      }
      completed = true;
      activeRequests = Math.max(0, activeRequests - 1);
      markActivity();
    };

    res.once("finish", onComplete);
    res.once("close", onComplete);
    next();
  }

  return {
    middleware,
    getActiveRequests: () => activeRequests,
    getLastActivityAt: () => lastActivityAt,
    isIdleFor: (durationMs) => activeRequests === 0 && now() - lastActivityAt >= durationMs,
  };
}

export function installGracefulShutdown({
  server,
  requestActivity,
  idleTimeoutMs,
  shutdownTimeoutMs,
  closeResources = [],
  logger = console,
}) {
  let shuttingDown = false;
  let idleTimer = null;

  async function shutdown(reason, exitCode = 0) {
    if (shuttingDown) {
      return;
    }
    shuttingDown = true;

    if (idleTimer) {
      clearInterval(idleTimer);
    }

    logger.info(`Shutting down: ${reason}`);

    const forceTimer = setTimeout(() => {
      logger.error(`Forced shutdown after ${shutdownTimeoutMs}ms`);
      server.closeAllConnections?.();
      process.exit(1);
    }, shutdownTimeoutMs);
    forceTimer.unref?.();

    try {
      await closeServer(server);
      await Promise.all(closeResources.map((closeResource) => closeResource()));
      process.exitCode = exitCode;
      logger.info("Shutdown complete");
    } catch (error) {
      process.exitCode = 1;
      logger.error("Shutdown failed", error);
    } finally {
      clearTimeout(forceTimer);
    }
  }

  if (idleTimeoutMs > 0) {
    const intervalMs = Math.min(Math.max(1000, Math.floor(idleTimeoutMs / 2)), 60000);
    idleTimer = setInterval(() => {
      if (requestActivity.isIdleFor(idleTimeoutMs)) {
        void shutdown(`idle for ${idleTimeoutMs}ms`);
      }
    }, intervalMs);
    idleTimer.unref?.();
  }

  const onSigint = () => void shutdown("SIGINT");
  const onSigterm = () => void shutdown("SIGTERM");
  const onUnhandledRejection = (error) => {
    logger.error("Unhandled rejection", error);
    void shutdown("unhandled rejection", 1);
  };
  const onUncaughtException = (error) => {
    logger.error("Uncaught exception", error);
    void shutdown("uncaught exception", 1);
  };

  process.once("SIGINT", onSigint);
  process.once("SIGTERM", onSigterm);
  process.once("unhandledRejection", onUnhandledRejection);
  process.once("uncaughtException", onUncaughtException);

  return {
    shutdown,
    dispose: () => {
      if (idleTimer) {
        clearInterval(idleTimer);
      }
      process.off("SIGINT", onSigint);
      process.off("SIGTERM", onSigterm);
      process.off("unhandledRejection", onUnhandledRejection);
      process.off("uncaughtException", onUncaughtException);
    },
  };
}

function closeServer(server) {
  if (!server.listening) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
    server.closeIdleConnections?.();
  });
}
