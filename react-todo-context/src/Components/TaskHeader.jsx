import { memo, useRef, useState } from "react";
import Confirm from "./modal/Confirm";
import { useDispatch, useSelector } from "react-redux";
import { reduxActions } from "../stores/redux/ReduxStore";

export default memo(function TaskHeader({
  setAlertMessage, // state의 함수 => 이미 캐싱이 되어있음. callback 대상 아님.
  alertRef, // ref 객체 => 이미 캐싱이 되어있음. memo대상 아님.
}) {
  console.log("Run App - TodoApp - TaskList - TaskHeader Component");

  const taskItemList = useSelector((store) => store.task);
  const taskDispatcher = useDispatch();

  const taskCount = {
    process: taskItemList.filter((task) => !task.done).length,
    done: taskItemList.filter((task) => task.done).length,
  };

  const allDoneConfirmRef = useRef();

  const [allDoneConfirmMessage, setAllDoneConfirmMessage] = useState();

  const doneAllTodoHandler = (event) => {
    const processingTodoLength = taskItemList.filter(
      (todo) => !todo.done
    ).length;
    if (event.currentTarget.checked && processingTodoLength === 0) {
      setAlertMessage("완료할 Task가 없습니다.");
      event.currentTarget.checked = false;
      alertRef.current.open();
      return;
    }

    if (event.currentTarget.checked) {
      event.currentTarget.checked = false;
      setAllDoneConfirmMessage(
        "모든 task를 완료할까요? 이 작업은 되돌릴 수 없습니다."
      );

      allDoneConfirmRef.current.open();
    }
  };

  const allDoneOkHandler = () => {
    taskDispatcher({ type: reduxActions.allDone });
    allDoneConfirmRef.current.close();
  };

  return (
    <>
      <li className="tasks-counter">
        <div>진행중: {taskCount.process}</div>
        <div>완료: {taskCount.done}</div>
      </li>
      <li className="tasks-header">
        <input id="checkall" type="checkbox" onChange={doneAllTodoHandler} />
        <label>Task</label>
        <span className="due-date">Due date</span>
        <span className="priority">Priority</span>
      </li>
      <Confirm ref={allDoneConfirmRef} okHandler={allDoneOkHandler}>
        <div>{allDoneConfirmMessage}</div>
      </Confirm>
    </>
  );
});
