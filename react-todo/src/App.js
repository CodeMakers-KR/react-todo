import { useMemo, useReducer, useRef } from "react";
import TaskAppender from "./components/TaskAppender";
import TaskList from "./components/TaskList";
import Confirm from "./components/modals/Confirm";
import taskReducers, { actionType } from "./reducers/taskReducers";

const addHandler = (task, dueDate, priority, taskDispatcher) => {
  taskDispatcher({
    type: actionType.add,
    payload: { task, dueDate, priority },
  });
};

function App() {
  console.log("Run App Component");

  const confirmRef = useRef();

  const [taskItemList, taskDispatcher] = useReducer(taskReducers, []);

  const taskAppenderRef = useRef();
  taskAppenderRef.onAdd = addHandler; // Cache!
  taskAppenderRef.dispatcher = taskDispatcher; // Cache!

  const taskCount = useMemo(
    () => ({
      done: taskItemList.filter((task) => task.done).length,
      process: taskItemList.filter((task) => !task.done).length,
    }),
    [taskItemList]
  );

  const taskAllDoneHandler = () => {
    taskDispatcher({ type: actionType.allDone });
  };

  const taskItemCheckHandler = (taskId) => {
    confirmRef.taskId = taskId;
    confirmRef.current.open();
  };

  const confirmOkClickHandler = () => {
    const taskId = confirmRef.taskId;
    confirmRef.current.close();

    console.log(taskId + "가 체크되었습니다.");
    // state가 관리하는 값이 primitive type이라면, 값만 전달한다.
    // state가 관리하는 값이 reference type이라면, 함수를 전달한다.
    // state가 변경되었다고 판단하는 케이스.
    // - primitive type이 변경되었다. => 값만 비교
    // - reference type이 변경되었다. => 메모리를 비교.
    //let arr = [1,2,3]; // 0x1
    //let arr2 = [...arr]; // 0x2
    taskDispatcher({ type: actionType.done, payload: { taskId } });
  };

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskList.TaskHeader
          taskCount={taskCount}
          onCheck={taskAllDoneHandler}
        />
        {taskItemList.map(({ id, task, dueDate, priority, done }) => (
          <TaskList.TaskItem
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
      <TaskAppender onRef={taskAppenderRef} />
      <Confirm ref={confirmRef} onOk={confirmOkClickHandler}>
        <div>
          <h3>Task를 완료하시겠습니까?</h3>
          <div>이 작업은 되돌릴 수 없습니다.</div>
        </div>
      </Confirm>
    </div>
  );
}

export default App;
