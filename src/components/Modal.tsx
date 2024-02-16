import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="p-2 bg-teal-900 rounded-md text-white"
        onClick={() => setOpen(!open)}
      >
        Open Modal
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-neutral-800/[0.8]"
          onClick={() => setOpen(!open)}
        >
          <div className="p-4 text-left bg-white w-96">
            <h3 className="pb-2 font-bold">Modal title</h3>
            <hr />
            <div className="py-4">You're reading this text in a modal!</div>
            <div className="flex justify-end">
              <button
                className="p-2 bg-teal-900 rounded-md text-white"
                onClick={() => setOpen(!open)}
              >
                Close modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
