import { useState } from "react";

export default function TaskAppender() {
  const [task, setTask] = useState();
  const [dueDate, setDueDate] = useState();
  const [priority, setPriority] = useState();

  const buttonClickHandler = () => {
    console.log("Task: ", task);
    console.log("DueDate: ", dueDate);
    console.log("Priority: ", priority);
  };

  const taskInputHandler = (event) => {
    console.log("TaskInput: ", event.currentTarget.value);
    setTask(event.currentTarget.value);
  };
  const dueDateChangeHandler = (event) => {
    console.log("DueDateChange: ", event.currentTarget.value);
    setDueDate(event.currentTarget.value);
  };
  const priorityChangeHandler = (event) => {
    console.log("PriorityChange: ", event.currentTarget.value);
    setPriority(event.currentTarget.value);
  };

  console.log("TaskAppender Component가 실행됐음.");

  return (
    <footer>
      <input type="text" placeholder="Task" onKeyUp={taskInputHandler} />
      <input type="date" onChange={dueDateChangeHandler} />
      <select onChange={priorityChangeHandler}>
        <option>우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={buttonClickHandler}>
        Save
      </button>
    </footer>
  );
}
