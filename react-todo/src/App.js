import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import TaskAppender from "./components/TaskAppender";
import TaskList from "./components/TaskList";
import Confirm from "./components/modals/Confirm";
import taskReducers, { actionType } from "./reducers/taskReducers";
import { addTask, allDoneTask, doneTask, loadTask } from "./http/taskHttp";

const addHandler = async (task, dueDate, priority, taskDispatcher) => {
  const addResponse = await addTask(task, dueDate, priority);

  taskDispatcher({
    type: actionType.add,
    payload: { id: addResponse.taskId, task, dueDate, priority },
  });
};

function App() {
  console.log("Run App Component");

  const confirmRef = useRef();

  const [nowLoading, setNowLoading] = useState(true);

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

  useEffect(() => {
    (async () => {
      setNowLoading(true);
      const loadResponse = await loadTask();
      setNowLoading(false);
      taskDispatcher({ type: actionType.init, payload: loadResponse });
    })();
  }, []);

  const taskAllDoneHandler = async () => {
    const allDoneResponse = await allDoneTask();
    if (allDoneResponse) {
      taskDispatcher({ type: actionType.allDone });
    }
  };

  const taskItemCheckHandler = (taskId) => {
    confirmRef.taskId = taskId;
    confirmRef.current.open();
  };

  const confirmOkClickHandler = () => {
    const taskId = confirmRef.taskId;
    confirmRef.current.close();

    doneTask(taskId);
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
        {nowLoading && <li>Task를 불러오는 중입니다. 잠시만 기다려주세요.</li>}
        {!nowLoading &&
          taskItemList.map(({ id, task, dueDate, priority, done }) => (
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
      <TaskAppender onRef={taskAppenderRef} taskItemList={taskItemList} />
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
