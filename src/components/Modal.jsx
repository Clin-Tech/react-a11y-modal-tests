import { useEffect } from "react";

export default function Modal({ open, onClose, title = "Dialog", children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
      data-testid="backdrop"
    >
      <div
        className="max-w-md w-[90%] rounded-lg bg-white shadow p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-lg font-semibold mb-2">
          {title}
        </h2>
        <div className="prose">{children}</div>
        <button
          className="mt-4 inline-flex items-center rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
