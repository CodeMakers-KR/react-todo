import { useEffect, useState } from "react";
import { loadTask } from "../http/taskHttp";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../stores/toolkit/slice/taskSlice";

export default function useTaskLoad() {
  const [nowLoading, setNowLoading] = useState(true);

  const taskItemList = useSelector((state) => state.task);
  const taskDispatcher = useDispatch();

  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      setErrors(undefined);
      setNowLoading(true);

      try {
        const response = await loadTask();
        taskDispatcher(taskActions.init(response));
      } catch (e) {
        setErrors(e.message || "요청이 잘못되었습니다.");
      } finally {
        setNowLoading(false);
      }
    })();
  }, [taskDispatcher]);

  return { taskItemList, taskDispatcher, nowLoading, errors };
}
