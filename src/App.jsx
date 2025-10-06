import { useState } from "react";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <button
        className="rounded bg-gray-900 text-white px-4 py-2"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Quick Demo">
        <p>This component is accessible, tested, and styled with Tailwind.</p>
      </Modal>
    </main>
  );
}
