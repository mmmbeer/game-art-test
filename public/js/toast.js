export function showToast(message, variant = "info") {
  const host = document.getElementById("toastHost");
  const toast = document.createElement("div");
  toast.className = `toast align-items-center text-bg-${variant} border-0`;
  toast.role = "alert";
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  host.appendChild(toast);
  const instance = new bootstrap.Toast(toast, { delay: 4000 });
  instance.show();
  toast.addEventListener("hidden.bs.toast", () => toast.remove());
}
