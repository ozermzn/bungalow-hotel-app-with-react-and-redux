import "../css/modal.css";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar, className, modalOutside }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const classes = classNames(
    "fixed inset-40 p-10 bg-white rounded-lg border border-4 border-orange-500",
    className
  );

  return ReactDOM.createPortal(
    <div className="">
      <div
        className="fixed inset-0 bg-black opacity-80"
        ref={modalOutside}
        onClick={onClose}
      ></div>
      <div id="modal-children-field" className={classes}>
        <div className="flex flex-col justify-between h-full ">
          {children}
          <div className="mx-auto">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
