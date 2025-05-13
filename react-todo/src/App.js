import { useState } from "react";
import TaskAppender from "./components/TaskAppender";
import TaskHeader from "./components/TaskHeader";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

function App() {
  const [taskItemList, setTaskItemList] = useState([
    {
      id: "task_1",
      task: "React Component 마스터",
      dueDate: "2025-12-31",
      priority: 1,
      done: true,
    },
    {
      id: "task_2",
      task: "React Props 마스터",
      dueDate: "2025-11-31",
      priority: 2,
      done: true,
    },
    {
      id: "task_3",
      task: "React State 마스터",
      dueDate: "2025-10-31",
      priority: 3,
      done: false,
    },
  ]);

  const taskItemCheckHandler = (taskId) => {
    console.log(taskId + "가 체크되었습니다.");
    // state가 관리하는 값이 primitive type이라면, 값만 전달한다.
    // state가 관리하는 값이 reference type이라면, 함수를 전달한다.
    // state가 변경되었다고 판단하는 케이스.
    // - primitive type이 변경되었다. => 값만 비교
    // - reference type이 변경되었다. => 메모리를 비교.
    //let arr = [1,2,3]; // 0x1
    //let arr2 = [...arr]; // 0x2
    setTaskItemList((prevState) =>
      prevState.map((task) => {
        if (task.id === taskId) {
          task.done = true;
        }
        return task;
      })
    );
  };

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskHeader />
        {taskItemList.map(({ id, task, dueDate, priority, done }) => (
          <TaskItem
            key={id}
            id={id}
            task={task}
            dueDate={dueDate}
            priority={priority}
            done={done}
            onCheck={taskItemCheckHandler}
          />
        ))}
      </TaskList>
      <TaskAppender />
    </div>
  );
}

export default App;
