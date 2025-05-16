import { useEffect, useReducer, useState } from "react";
import {
  articleActionType,
  articleReducers,
} from "../reducers/articleReducers";
import { loadArticle, loadArticles, loadReplies } from "../http/articleHttp";

export function useLoadArticles(initialState, pageNo, refresh) {
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
        const articleJson = await loadArticles(pageNo);
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
  }, [pageNo, refresh]);

  return { articles, articleDispatcher, nowLoading, errors };
}

export function useLoadArticle(initialState, id) {
  const [article, setArticle] = useState(initialState);
  const [nowLoading, setNowLoading] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      setNowLoading(true);
      setErrors(undefined);
      try {
        const articleJson = await loadArticle(id);
        setArticle(articleJson.data);
      } catch (e) {
        const errorObj = JSON.parse(e.message);
        setErrors(errorObj);
      } finally {
        setNowLoading(false);
      }
    })();
  }, [id]);

  return { article, setArticle, nowLoading, errors };
}

export function useLoadReplies(initialState, id) {
  const [replies, setReplies] = useState(initialState);
  const [nowLoading, setNowLoading] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    (async () => {
      setNowLoading(true);
      setErrors(undefined);
      try {
        const repliesJson = await loadReplies(id);
        setReplies(repliesJson.data);
      } catch (e) {
        const errorObj = JSON.parse(e.message);
        setErrors(errorObj);
      } finally {
        setNowLoading(false);
      }
    })();
  }, [id]);

  return { replies, setReplies, nowLoading, errors };
}
