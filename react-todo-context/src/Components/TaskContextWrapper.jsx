import { useCallback, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";

export default function TaskContextWrapper() {
  const { done, allDone, add, todoLists } = useContext(TaskContext);

  const cachedAdd = useCallback(add, []);
  const cachedAllDone = useCallback(allDone, []);

  return (
    <>
      <TaskList onDone={done} onAllDone={cachedAllDone} todoLists={todoLists} />
      <TaskAppender onAdd={cachedAdd} />
    </>
  );
}
