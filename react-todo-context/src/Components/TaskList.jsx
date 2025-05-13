import { useRef, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import Confirm from "./modal/Confirm";
import Alert from "./modal/Modal";

export default function TaskList({ todoLists, setTodoLists }) {
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
    setTodoLists((prevTodoList) => {
      const newTodoList = [...prevTodoList];

      newTodoList.map((todo) => {
        if (todo.id === doneConfirmRef.todoId) {
          todo.done = true;
        }
        return todo;
      });
      return newTodoList;
    });

    doneConfirmRef.current.close();
  };

  return (
    <>
      <ul className="tasks">
        <TaskHeader
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          setAlertMessage={setAlertMessage}
          alertRef={alertRef}
        />
        {todoLists.map((item) => (
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
