export function createRatings({ elements, state }) {
  const { ratingState } = state;
  const { ratingPanel, voteTrack, voteBack, voteSkip } = elements;
  const slides = Array.from(ratingPanel.querySelectorAll(".vote-slide"));
  const metricOrder = slides.map((slide) => slide.dataset.metric);
  let currentIndex = 0;
  let isEnabled = true;
  ratingPanel.style.setProperty("--slide-count", slides.length);

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

    voteBack.addEventListener("click", () => {
      if (!isEnabled || currentIndex <= 0) {
        return;
      }
      setIndex(currentIndex - 1);
    });

    voteSkip.addEventListener("click", () => {
      if (!isEnabled) {
        return;
      }
      if (currentIndex < slides.length - 1) {
        setIndex(currentIndex + 1);
        return;
      }
      const firstMissingIndex = findFirstMissingIndex();
      if (firstMissingIndex !== null) {
        setIndex(firstMissingIndex);
      }
    });
  }

  function resetRatings() {
    ratingState.professionalism = 0;
    ratingState.appeal = 0;
    ratingState.understandability = 0;
    ratingPanel.querySelectorAll(".vote-slide").forEach((group) => {
      group.querySelectorAll(".star-button").forEach((star) => star.classList.remove("is-on"));
    });
    setIndex(0, { instant: true });
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
    voteBack.classList.toggle("hidden", currentIndex === 0);
    if (instant) {
      requestAnimationFrame(() => voteTrack.classList.remove("no-transition"));
    }
  }

  function handleAdvanceAfterVote(metric) {
    const metricIndex = metricOrder.indexOf(metric);
    if (metricIndex !== -1 && metricIndex < slides.length - 1) {
      setIndex(metricIndex + 1);
      return;
    }
    const firstMissingIndex = findFirstMissingIndex();
    if (firstMissingIndex !== null) {
      setIndex(firstMissingIndex);
      return;
    }
    if (state.currentAsset) {
      ratingPanel.dispatchEvent(new CustomEvent("ratings:complete", { bubbles: true }));
    }
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
  }

  return {
    bindRatingEvents,
    resetRatings,
    setEnabled,
  };
}
