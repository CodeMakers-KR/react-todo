import { useEffect, useReducer, useState } from "react";
import taskReducers, { actionType } from "../reducers/taskReducers";
import { loadTask } from "../http/taskHttp";

export default function useTaskLoad() {
  const [nowLoading, setNowLoading] = useState(true);
  const [taskItemList, taskDispatcher] = useReducer(taskReducers, []);
  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      setErrors(undefined);
      setNowLoading(true);

      try {
        const response = await loadTask();
        taskDispatcher({ type: actionType.init, payload: response });
      } catch (e) {
        setErrors(e.message || "요청이 잘못되었습니다.");
      } finally {
        setNowLoading(false);
      }
    })();
  }, []);

  return { taskItemList, taskDispatcher, nowLoading, errors };
}
