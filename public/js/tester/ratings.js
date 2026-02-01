export function createRatings({ elements, state }) {
  const { ratingState } = state;
  const { ratingPanel, voteTrack, voteSkip, commentInput, commentSubmit } = elements;
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

    voteSkip.addEventListener("click", () => {
      if (!isEnabled) {
        return;
      }
      handleSkip();
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

  function handleSkip() {
    const metric = metricOrder[currentIndex];
    if (metric === "comment") {
      ratingPanel.dispatchEvent(new CustomEvent("ratings:complete", { bubbles: true }));
      return;
    }
    if (metric && !ratingState[metric]) {
      ratingState[metric] = 3;
      const group = slides[currentIndex];
      updateRatingUI(group, 3);
    }
    if (currentIndex < slides.length - 1) {
      setIndex(currentIndex + 1);
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
