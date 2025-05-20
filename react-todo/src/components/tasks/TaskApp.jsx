import { useEffect, useMemo, useRef, useState } from "react";
import TaskAppender from "./TaskAppender";
import TaskList from "./TaskList";
import Confirm from "../modals/Confirm";
import useTaskLoad from "../../hooks/task";
import { taskCustomActions } from "../../stores/toolkit/slice/taskSlice";

const addHandler = async (task, dueDate, priority, taskDispatcher) => {
  taskDispatcher(taskCustomActions.add(task, dueDate, priority));
};

export default function TaskApp() {
  const { taskItemList, taskDispatcher, errors, nowLoading } = useTaskLoad();

  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const confirmRef = useRef();
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

  const taskAllDoneHandler = async () => {
    // const allDoneResponse = await allDoneTask();
    // if (allDoneResponse) {
    //   taskDispatcher(taskActions.allDone());
    // }
    setError(undefined);
    taskDispatcher(taskCustomActions.allDone(setError));
  };

  const taskItemCheckHandler = (taskId) => {
    confirmRef.taskId = taskId;
    confirmRef.current.open();
  };

  const confirmOkClickHandler = () => {
    const taskId = confirmRef.taskId;
    confirmRef.current.close();

    setError(undefined);
    taskDispatcher(taskCustomActions.done(taskId, setError));
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
        {!nowLoading && errors && <li>에러가 발생했습니다! ({errors})</li>}
        {!nowLoading &&
          !errors &&
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
