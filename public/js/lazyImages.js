const DEFAULT_ROOT_MARGIN = "200px 0px";

function getFrame(img) {
  return img.closest(".image-frame");
}

function clearLoading(img) {
  const frame = getFrame(img);
  if (frame) {
    frame.classList.remove("is-loading");
  }
}

function attachImageEvents(img) {
  const frame = getFrame(img);
  if (frame) {
    frame.classList.add("is-loading");
  }

  if (img.complete && img.naturalWidth > 0) {
    clearLoading(img);
    return;
  }

  img.addEventListener("load", () => clearLoading(img), { once: true });
  img.addEventListener("error", () => clearLoading(img), { once: true });
}

function loadImage(img) {
  const src = img.dataset.src;
  if (!src) {
    return;
  }
  attachImageEvents(img);
  img.src = src;
  img.removeAttribute("data-src");
}

export function initLazyImages(container, options = {}) {
  if (!container) {
    return;
  }
  const images = Array.from(container.querySelectorAll("img[data-src]"));
  if (!images.length) {
    return;
  }
  const root = options.root || null;
  const rootMargin = options.rootMargin || DEFAULT_ROOT_MARGIN;

  if (!("IntersectionObserver" in window)) {
    images.forEach((img) => loadImage(img));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const img = entry.target;
        observer.unobserve(img);
        loadImage(img);
      });
    },
    { root, rootMargin, threshold: 0.01 }
  );

  images.forEach((img) => observer.observe(img));
}
