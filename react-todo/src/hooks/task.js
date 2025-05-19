import { useEffect, useState } from "react";
import { loadTask } from "../http/taskHttp";
import { useDispatch, useSelector } from "react-redux";
import { reduxActions } from "../stores/redux/ReduxStore";

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
        taskDispatcher({ type: reduxActions.init, payload: response });
      } catch (e) {
        setErrors(e.message || "요청이 잘못되었습니다.");
      } finally {
        setNowLoading(false);
      }
    })();
  }, []);

  return { taskItemList, taskDispatcher, nowLoading, errors };
}
