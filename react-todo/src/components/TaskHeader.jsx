import { useRef } from "react";
import Confirm from "./modals/Confirm";

export default function TaskHeader({ onCheck }) {
  const confirmRef = useRef();

  const confirmOkClickHandler = () => {
    onCheck();
    confirmRef.current.close();
  };
  const confirmCancelClickHandler = () => {
    confirmRef.current.close();
  };

  const checkHandler = (event) => {
    console.log("모든 Task 완료: ", event.currentTarget.checked);
    confirmRef.current.open();
    event.currentTarget.checked = false;
  };

  return (
    <>
      <li className="tasks-header">
        <input id="checkall" type="checkbox" onChange={checkHandler} />
        <label>Task</label>
        <span className="due-date">Due Date</span>
        <span className="priority">Priority</span>
      </li>
      <Confirm
        ref={confirmRef}
        onOk={confirmOkClickHandler}
        onCancel={confirmCancelClickHandler}
      >
        <div>
          <h3>모든 Task를 완료하시겠습니까?</h3>
          <div>이 작업은 되돌릴 수 없습니다.</div>
        </div>
      </Confirm>
    </>
  );
}
