import { memo, useRef, useState } from "react";
import Alert from "../modals/Alert";

export default memo(function TaskAppender({ onRef }) {
  const [alertMessage, setAlertMessage] = useState();

  const alertRef = useRef();

  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const buttonClickHandler = () => {
    if (!taskRef.current.value) {
      setAlertMessage("Task를 입력하세요.");

      alertRef.current.open();
      return;
    }
    if (!dueDateRef.current.value) {
      setAlertMessage("완료예상일자를 선택하세요.");
      alertRef.current.open();
      return;
    }
    if (!priorityRef.current.value) {
      setAlertMessage("우선순위를 선택하세요.");
      alertRef.current.open();
      return;
    }

    onRef.onAdd(
      taskRef.current.value,
      dueDateRef.current.value,
      priorityRef.current.value,
      onRef.dispatcher
    );

    taskRef.current.value = "";
    dueDateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <>
      <footer>
        <input type="text" placeholder="Task" ref={taskRef} />
        <input type="date" ref={dueDateRef} />
        <select ref={priorityRef}>
          <option value="">우선순위</option>
          <option value="1">높음</option>
          <option value="2">보통</option>
          <option value="3">낮음</option>
        </select>
        <button type="button" onClick={buttonClickHandler}>
          Save
        </button>
      </footer>
      <Alert ref={alertRef}>
        <div>
          <h3>{alertMessage}</h3>
        </div>
      </Alert>
    </>
  );
});
