import { useImperativeHandle, useRef } from "react";

export default function Alert({ children, ref }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  const closeClickHandler = () => {
    dialogRef.current.close();
  };

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-body">
        <section className="modal-close-button" onClick={closeClickHandler}>
          X
        </section>
        {children}
      </div>
    </dialog>
  );
}
