import TaskContextProvider from "../contexts/TaskContext";
import TaskContextWrapper from "./TaskContextWrapper";

export default function TodoApp() {
  console.log("Run App - TodoApp Component");

  const todoLists = [
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
  ];

  return (
    <>
      <div className="wrapper">
        <header>React Todo</header>
        <TaskContextProvider initialState={todoLists}>
          <TaskContextWrapper />
        </TaskContextProvider>
      </div>
    </>
  );
}
