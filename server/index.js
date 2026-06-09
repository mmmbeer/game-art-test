import app from "./app.js";
import env from "./config/env.js";
import pool from "./db/pool.js";
import { installGracefulShutdown } from "./lifecycle.js";

const server = app.listen(env.port, () => {
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : env.port;
  console.log(`Server listening on port ${port}`);
  if (env.app.idleTimeoutMs > 0) {
    console.log(`Idle shutdown enabled after ${env.app.idleTimeoutMs}ms`);
  }
});

server.on("error", (error) => {
  console.error("Server failed to start", error);
  process.exitCode = 1;
});

installGracefulShutdown({
  server,
  requestActivity: app.locals.requestActivity,
  idleTimeoutMs: env.app.idleTimeoutMs,
  shutdownTimeoutMs: env.app.shutdownTimeoutMs,
  closeResources: [() => pool.end()],
});
