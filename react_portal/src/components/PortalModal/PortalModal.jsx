import React, { useState } from "react";
import ShowModal from "../modal/ShowModal";
import { createPortal } from "react-dom";

export default function PortalModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative border border-l-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        className="border rounded-md bg-blue-400 text-white p-4"
        onClick={() => setShowModal(true)}
      >
        Show The modal
      </button>

      {showModal && createPortal(<ShowModal onClose={() => setShowModal(false)} />,document.body)}

  
    </div>
  );
}
