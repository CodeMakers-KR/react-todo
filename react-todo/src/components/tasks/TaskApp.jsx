import { useMemo, useRef } from "react";
import TaskAppender from "./TaskAppender";
import TaskList from "./TaskList";
import Confirm from "../modals/Confirm";
import { actionType } from "../../reducers/taskReducers";
import { addTask, allDoneTask, doneTask } from "../../http/taskHttp";
import useTaskLoad from "../../hooks/task";
s;

const addHandler = async (task, dueDate, priority, taskDispatcher) => {
  const addResponse = await addTask(task, dueDate, priority);

  taskDispatcher({
    type: actionType.add,
    payload: { id: addResponse.taskId, task, dueDate, priority },
  });
};

export default function TaskApp() {
  console.log("Run App Component");

  const { taskItemList, taskDispatcher, errors, nowLoading } = useTaskLoad();

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
