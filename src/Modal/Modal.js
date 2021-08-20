import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Overlayy = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <Overlayy>{props.children}</Overlayy>,
        portalElement
      )}
    </>
  );
};

export default Modal;
