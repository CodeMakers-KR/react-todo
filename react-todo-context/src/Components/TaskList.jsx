import { useMemo, useRef, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import Confirm from "./modal/Confirm";
import Alert from "./modal/Modal";
import useTaskLoad from "../hooks/task";
import { reduxActions } from "../stores/redux/ReduxStore";

export default function TaskList() {
  console.log("Run App - TodoApp - TaskList Component");

  const { taskItemList, taskDispatcher, errors, nowLoading } = useTaskLoad();

  const doneConfirmRef = useRef();
  const alertRef = useRef();

  const [alertMessage, setAlertMessage] = useState();
  const [doneConfirmMessage, setDoneConfirmMessage] = useState();

  const doneTodoHandler = (event) => {
    const todoId = event.currentTarget.value;
    setDoneConfirmMessage(
      `${todoId} task를 완료할까요? 이 작업은 되돌릴 수 없습니다.`
    );
    doneConfirmRef.current.open();
    doneConfirmRef.todoId = todoId;
  };

  const doneTodoItemHandler = () => {
    taskDispatcher({
      type: reduxActions.done,
      payload: { taskId: doneConfirmRef.todoId },
    });
    doneConfirmRef.current.close();
  };

  return (
    <>
      <ul className="tasks">
        <TaskHeader setAlertMessage={setAlertMessage} alertRef={alertRef} />
        {taskItemList.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            task={item.task}
            dueDate={item.dueDate}
            priority={item.priority}
            done={item.done}
            onCheckboxClick={doneTodoHandler}
          />
        ))}
      </ul>

      <Alert ref={alertRef}>
        <div>
          <h3>{alertMessage}</h3>
        </div>
      </Alert>
      <Confirm ref={doneConfirmRef} okHandler={doneTodoItemHandler}>
        <div>{doneConfirmMessage}</div>
      </Confirm>
    </>
  );
}
