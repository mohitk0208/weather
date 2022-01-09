import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal-backdrop ${props.show && "show"}`}>
      <div
        className={`modal ${props.className} ${props.show && "show"} `}
        style={props.style}
      >
        <header className={`modal__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <div className={`modal `}>
      <ModalOverlay {...props} />
    </div>
  );
};

export default Modal;
