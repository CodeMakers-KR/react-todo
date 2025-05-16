import { useEffect, useReducer, useState } from "react";
import {
  articleActionType,
  articleReducers,
} from "../reducers/articleReducers";
import { loadArticles } from "../http/articleHttp";

export function useLoadArticles(initialState, pageNo, listSize) {
  const [articles, articleDispatcher] = useReducer(
    articleReducers,
    initialState
  );
  const [nowLoading, setNowLoading] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      setNowLoading(true);
      setErrors(undefined);
      try {
        const articleJson = await loadArticles(pageNo, listSize);
        articleDispatcher({
          type:
            pageNo === 0 ? articleActionType.init : articleActionType.append,
          payload: articleJson,
        });
      } catch (e) {
        const errorObj = JSON.parse(e.message);
        setErrors(errorObj);
      } finally {
        setNowLoading(false);
      }
    })();
  }, [pageNo, listSize]);

  return { articles, articleDispatcher, nowLoading, errors };
}
