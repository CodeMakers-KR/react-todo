import { useRef, useState } from "react";
import Confirm from "./modal/Confirm";

export default function TaskHeader({
  todoLists,
  setTodoLists,
  setAlertMessage,
  alertRef,
}) {
  const allDoneConfirmRef = useRef();

  const [allDoneConfirmMessage, setAllDoneConfirmMessage] = useState();

  const doneAllTodoHandler = (event) => {
    const processingTodoLength = todoLists.filter((todo) => !todo.done).length;
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
    setTodoLists((prevTodoList) => {
      const newTodoList = [...prevTodoList];

      newTodoList.map((todo) => {
        todo.done = true;
        return todo;
      });
      return newTodoList;
    });

    allDoneConfirmRef.current.close();
  };

  return (
    <>
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
}
