import { useImperativeHandle, useState } from "react";

export default function Confirm({ onOk, onCancel, children, ref }) {
  const [display, setDisplay] = useState("none");

  const confirmStyle = {
    position: "fixed",
    top: 100,
    left: 100,
    backgroundColor: "#FFF",
    width: "500px",
    border: "1px solid #DDD",
    display,
  };

  useImperativeHandle(ref, () => ({
    open() {
      setDisplay("block");
    },
    close() {
      setDisplay("none");
    },
  }));

  return (
    <div className="modal" style={confirmStyle}>
      <div className="modal-body">
        {children}
        <section>
          <button type="button" className="confirm-ok" onClick={onOk}>
            OK
          </button>
          <button
            type="button"
            className="confirm-cancel"
            onClick={onCancel ?? (() => setDisplay("none"))}
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
}
