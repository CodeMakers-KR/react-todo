import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";

export default function TaskContextWrapper() {
  const { done, allDone, add, todoLists } = useContext(TaskContext);

  return (
    <>
      <TaskList onDone={done} onAllDone={allDone} todoLists={todoLists} />
      <TaskAppender onAdd={add} />
    </>
  );
}
