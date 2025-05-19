import { Provider } from "react-redux";
import { createStore } from "redux";

// 1. Redux Action
export const reduxActions = {
  task: {
    init: "TASK-INIT",
    done: "TASK-DONE",
    allDone: "TASK-ALL-DONE",
    add: "TASK-ADD",
  },
  article: { init: "ARTICLE-INIT", append: "ARTICLE-APPEND" },
  jwt: { init: "JWT-INIT", remove: "JWT-REMOVE" },
  userInfo: { init: "UI-INIT", remove: "UI-REMOVE" },
  nowView: { change: "NV-CHANGE" },
};

// 2. Redux Reducer
// state = {task: [], article: []}
function reduxReducers(
  state = { task: [], article: {}, jwt: "", userInfo: {} },
  action
) {
  // type: action의 종류. (DONE, ALL-DONE, ADD)
  // payload: state를 변화시킬 데이터 - type에 대한 파라미터. (완료할 태스크의 아이디, 빈 객체, 데이터가 있는 객체.)
  const { type, payload } = action;

  // payload: task의 payload
  // type: reduxActions.init, payload: [{}, {}, {}, {}, ...]
  if (type === reduxActions.task.init) {
    return { ...state, task: [...payload] };
  } else if (type === reduxActions.task.add) {
    // 새로운 태스크를 state에게 등록시킨다.
    const { id, task, dueDate, priority } = payload;
    return {
      ...state,
      task: [
        ...state.task,
        {
          id,
          task,
          dueDate,
          priority,
          done: false,
        },
      ],
    };
  } else if (type === reduxActions.task.done) {
    const { taskId } = payload;

    const newState = { ...state };
    newState.task = newState.task.map((task) => {
      if (task.id === taskId) {
        task.done = true;
      }
      return task;
    });
    return newState;
    // 지정된 태스크의 done을 true로 바꾼다.
  } else if (type === reduxActions.task.allDone) {
    // 모든 태스크의 done을 true로 바꾼다.
    const newState = { ...state };
    newState.task = newState.task.map((task) => {
      if (!task.done) {
        task.done = true;
      }
      return task;
    });
    return newState;
  } else if (type === reduxActions.article.init) {
    return { ...state, article: { ...payload } };
  } else if (type === reduxActions.article.append) {
    return {
      ...state,
      article: {
        ...state.article,
        count: payload.count,
        hasMore: payload.hasMore,
        listSize: payload.listSize,
        page: payload.page,
        pageCount: payload.pageCount,
        status: payload.status,
        data: [...state.article.data, ...payload.data],
      },
    };
  } else if (type === reduxActions.jwt.init) {
    localStorage.setItem("token", payload);
    return { ...state, jwt: payload };
  } else if (type === reduxActions.jwt.remove) {
    localStorage.removeItem("token");
    return { ...state, jwt: undefined };
  } else if (type === reduxActions.userInfo.init) {
    return { ...state, userInfo: { ...payload } };
  } else if (type === reduxActions.userInfo.remove) {
    return { ...state, userInfo: {} };
  }

  return state; //!!!!
}

// 3. Redux Store
// @deprecated: 권장되지 않음.
// React Redux : createStore() <-- 권장하지 않는다. : Redux 자체를 권장하지 않는다!
//        대신, Store의 관리가 편리한 Redux-Toolkit 사용을 권장한다.
function createReduxStore() {
  return createStore(reduxReducers);
}

// 4. Redux Provider
export default function ReduxProvider({ children }) {
  return <Provider store={createReduxStore()}>{children}</Provider>;
}
