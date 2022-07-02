import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="container-modal">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
