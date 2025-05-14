import { createContext, useContext, useRef } from "react";
import Confirm from "./modals/Confirm";

const TaskListContext = createContext();

export default function TaskList({ children }) {
  return (
    <TaskListContext.Provider value="">
      <ul className="tasks">{children}</ul>
    </TaskListContext.Provider>
  );
}

const TaskHeader = ({ taskCount, onCheck }) => {
  console.log("Run TaskHeader Component");

  const ctx = useContext(TaskListContext);

  if (ctx === undefined) {
    throw new Error("TaskHeader는 TaskList내부에서 사용되어야 합니다.");
  }

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
      <li className="tasks-counter">
        <div>진행중: {taskCount.process}</div>
        <div>완료: {taskCount.done}</div>
      </li>
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
};

const TaskItem = ({ id, task, dueDate, priority, done, onCheck }) => {
  const ctx = useContext(TaskListContext);

  if (ctx === undefined) {
    throw new Error("TaskItem은 TaskList내부에서 사용되어야 합니다.");
  }

  const checkHandler = (event) => {
    console.log(`${id} Checked: `, event.currentTarget.checked);
    onCheck(id);
  };

  return (
    <li className="task-item">
      <input
        id={id}
        type="checkbox"
        checked={done}
        disabled={done}
        onChange={checkHandler}
      />
      <label htmlFor={id} className={done ? "done-todo" : ""}>
        {task}
      </label>
      <span className={`due-date ${done ? "done-todo" : ""}`}>{dueDate}</span>
      <span className={`priority ${done ? "done-todo" : ""}`}>{priority}</span>
    </li>
  );
};

TaskList.TaskHeader = TaskHeader;
TaskList.TaskItem = TaskItem;
