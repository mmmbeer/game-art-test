export function createRatings({ elements, state }) {
  const { ratingState } = state;
  const { ratingPanel, voteTrack, voteSkip, commentInput, commentSubmit } = elements;
  const slides = Array.from(ratingPanel.querySelectorAll(".vote-slide"));
  const metricOrder = slides.map((slide) => slide.dataset.metric);
  const progressMetrics = metricOrder.filter((metric) => metric !== "comment");
  let currentIndex = 0;
  let isEnabled = true;
  ratingPanel.style.setProperty("--slide-count", slides.length);
  setActiveSlide(0);
  emitProgress();

  function bindRatingEvents() {
    ratingPanel.addEventListener("click", (event) => {
      const button = event.target.closest(".star-button");
      if (!button) {
        return;
      }
      if (!isEnabled) {
        return;
      }
      const group = event.target.closest(".vote-slide");
      const metric = group?.dataset.metric;
      const value = Number.parseInt(button.dataset.value || "0", 10);
      if (!metric || !value) {
        return;
      }
      ratingState[metric] = value;
      updateRatingUI(group, value);
      handleAdvanceAfterVote(metric);
    });

    ratingPanel.addEventListener("mouseover", (event) => {
      const button = event.target.closest(".star-button");
      if (!button) {
        return;
      }
      if (!isEnabled) {
        return;
      }
      const group = event.target.closest(".vote-slide");
      const value = Number.parseInt(button.dataset.value || "0", 10);
      if (!group || !value) {
        return;
      }
      applyStarPreview(group, value);
    });

    ratingPanel.addEventListener("mouseout", (event) => {
      const button = event.target.closest(".star-button");
      if (!button) {
        return;
      }
      if (!isEnabled) {
        return;
      }
      const group = event.target.closest(".vote-slide");
      if (!group) {
        return;
      }
      restoreStars(group);
    });

    voteSkip.addEventListener("click", () => {
      if (!isEnabled) {
        return;
      }
      ratingPanel.dispatchEvent(new CustomEvent("ratings:skip", { bubbles: true }));
    });

    if (commentSubmit) {
      commentSubmit.addEventListener("click", () => {
        if (!isEnabled) {
          return;
        }
        ratingPanel.dispatchEvent(new CustomEvent("ratings:complete", { bubbles: true }));
      });
    }

    if (commentInput) {
      commentInput.addEventListener("input", () => {
        const trimmed = commentInput.value.slice(0, 500);
        if (trimmed !== commentInput.value) {
          commentInput.value = trimmed;
        }
      });
    }
  }

  function resetRatings() {
    ratingState.professionalism = 0;
    ratingState.appeal = 0;
    ratingState.understandability = 0;
    ratingPanel.querySelectorAll(".vote-slide").forEach((group) => {
      group.querySelectorAll(".star-button").forEach((star) => star.classList.remove("is-on"));
    });
    if (commentInput) {
      commentInput.value = "";
    }
    setIndex(0, { instant: true });
    emitProgress();
  }

  function updateRatingUI(group, value) {
    group.querySelectorAll(".star-button").forEach((star) => {
      const starValue = Number.parseInt(star.dataset.value || "0", 10);
      star.classList.toggle("is-on", starValue <= value);
      star.classList.remove("preview");
    });
  }

  function applyStarPreview(group, value) {
    group.querySelectorAll(".star-button").forEach((star) => {
      const starValue = Number.parseInt(star.dataset.value || "0", 10);
      star.classList.toggle("preview", starValue <= value);
    });
  }

  function restoreStars(group) {
    group.querySelectorAll(".star-button").forEach((star) => {
      star.classList.remove("preview");
    });
    const metric = group.dataset.metric;
    const value = ratingState[metric] || 0;
    if (value) {
      updateRatingUI(group, value);
    }
  }

  function setIndex(nextIndex, { instant = false } = {}) {
    currentIndex = Math.max(0, Math.min(nextIndex, slides.length - 1));
    if (instant) {
      voteTrack.classList.add("no-transition");
    }
    const slidePct = slides.length ? 100 / slides.length : 100;
    voteTrack.style.transform = `translateX(-${currentIndex * slidePct}%)`;
    setActiveSlide(currentIndex);
    if (instant) {
      requestAnimationFrame(() => voteTrack.classList.remove("no-transition"));
    }
  }

  function setActiveSlide(activeIndex) {
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    const metric = slides[activeIndex]?.dataset.metric || "";
    ratingPanel.dataset.activeMetric = metric;
    ratingPanel.dispatchEvent(
      new CustomEvent("ratings:slide", {
        bubbles: true,
        detail: { metric, index: activeIndex },
      })
    );
  }

  function handleAdvanceAfterVote(metric) {
    const metricIndex = metricOrder.indexOf(metric);
    if (metricIndex !== -1 && metricIndex < slides.length - 1) {
      setIndex(metricIndex + 1);
    }
    emitProgress();
  }

  function emitProgress() {
    const completed = progressMetrics.filter((metric) => ratingState[metric]).length;
    ratingPanel.dispatchEvent(
      new CustomEvent("ratings:progress", {
        bubbles: true,
        detail: { completed, total: progressMetrics.length },
      })
    );
  }


  function findFirstMissingIndex() {
    for (let i = 0; i < metricOrder.length; i += 1) {
      if (!ratingState[metricOrder[i]]) {
        return i;
      }
    }
    return null;
  }

  function setEnabled(enabled) {
    isEnabled = enabled;
    ratingPanel.classList.toggle("is-disabled", !enabled);
    if (commentInput) {
      commentInput.disabled = !enabled;
    }
    if (commentSubmit) {
      commentSubmit.disabled = !enabled;
    }
  }

  return {
    bindRatingEvents,
    resetRatings,
    setEnabled,
  };
}
