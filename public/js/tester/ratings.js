export function createRatings({ elements, state }) {
  const { ratingState } = state;
  const { ratingPanel, commentInput, commentHint, submitVote } = elements;

  function bindRatingEvents() {
    ratingPanel.addEventListener("click", (event) => {
      const button = event.target.closest(".star-button");
      if (!button) {
        return;
      }
      const group = event.target.closest(".rating-row");
      const metric = group?.dataset.metric;
      const value = Number.parseInt(button.dataset.value || "0", 10);
      if (!metric || !value) {
        return;
      }
      ratingState[metric] = value;
      updateRatingUI(group, value);
      updateSubmitState();
    });

    ratingPanel.addEventListener("mouseover", (event) => {
      const button = event.target.closest(".star-button");
      if (!button) {
        return;
      }
      const group = event.target.closest(".rating-row");
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
      const group = event.target.closest(".rating-row");
      if (!group) {
        return;
      }
      restoreStars(group);
    });

    commentInput.addEventListener("input", () => {
      const trimmed = commentInput.value.slice(0, 500);
      if (trimmed !== commentInput.value) {
        commentInput.value = trimmed;
      }
      commentHint.textContent = `${commentInput.value.length} / 500`;
    });
  }

  function resetRatings() {
    ratingState.professionalism = 0;
    ratingState.appeal = 0;
    ratingState.understandability = 0;
    ratingPanel.querySelectorAll(".rating-row").forEach((group) => {
      group.querySelectorAll(".star-button").forEach((star) => star.classList.remove("is-on"));
    });
    commentInput.value = "";
    commentHint.textContent = "0 / 500";
  }

  function updateRatingUI(group, value) {
    group.querySelectorAll(".star-button").forEach((star) => {
      const starValue = Number.parseInt(star.dataset.value || "0", 10);
      star.classList.toggle("is-on", starValue <= value);
      star.classList.remove("preview");
    });
  }

  function updateSubmitState() {
    const ready =
      ratingState.professionalism &&
      ratingState.appeal &&
      ratingState.understandability &&
      state.currentAsset;
    submitVote.disabled = !ready;
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

  return {
    bindRatingEvents,
    resetRatings,
    updateSubmitState,
  };
}
