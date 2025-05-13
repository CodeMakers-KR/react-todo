import { useState } from "react";
import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";

export default function TodoApp() {
  const [todoLists, setTodoLists] = useState([
    {
      id: "item1",
      task: "React Component Master",
      dueDate: "2025-12-31",
      priority: 1,
      done: true,
    },
    {
      id: "item2",
      task: "React Props Master",
      dueDate: "2025-10-11",
      priority: 1,
      done: true,
    },
    {
      id: "item3",
      task: "React States Master",
      dueDate: "2025-09-07",
      priority: 1,
      done: false,
    },
  ]);

  return (
    <>
      <div className="wrapper">
        <header>React Todo</header>
        <TaskList todoLists={todoLists} setTodoLists={setTodoLists} />
        <TaskAppender setTodoLists={setTodoLists} />
      </div>
    </>
  );
}
