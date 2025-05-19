import ReduxProvider from "../stores/redux/ReduxStore";
import TaskAppender from "./TaskAppender";
import TaskList from "./TaskList";

export default function TodoApp() {
  console.log("Run App - TodoApp Component");

  return (
    <>
      <div className="wrapper">
        <header>React Todo</header>
        <ReduxProvider>
          <TaskList />
          <TaskAppender />
        </ReduxProvider>
      </div>
    </>
  );
}
