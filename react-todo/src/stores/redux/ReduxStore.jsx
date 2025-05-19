import { Provider } from "react-redux";
import { createStore } from "redux";

// 1. Redux Action
export const reduxActions = {
  init: "INIT",
  done: "DONE",
  allDone: "ALL-DONE",
  add: "ADD",
};

// 2. Redux Reducer
// state = {task: [], article: []}
function reduxReducers(state = { task: [] }, action) {
  // type: action의 종류. (DONE, ALL-DONE, ADD)
  // payload: state를 변화시킬 데이터 - type에 대한 파라미터. (완료할 태스크의 아이디, 빈 객체, 데이터가 있는 객체.)
  const { type, payload } = action;

  // payload: task의 payload
  // type: reduxActions.init, payload: [{}, {}, {}, {}, ...]
  if (type === reduxActions.init) {
    return { ...state, task: [...payload] };
  } else if (type === reduxActions.add) {
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
  } else if (type === reduxActions.done) {
    const { taskId } = payload;

    const newState = { ...state };
    const taskIndex = newState.task.findIndex((task) => task.id === taskId);
    newState.task[taskIndex].done = true;
    return newState;
    // 지정된 태스크의 done을 true로 바꾼다.
  } else if (type === reduxActions.allDone) {
    // 모든 태스크의 done을 true로 바꾼다.
    const newState = { ...state };
    newState.task = newState.task.map((task) => {
      if (!task.done) {
        task.done = true;
      }
      return task;
    });
    return newState;
  }

  return state;
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
  const store = createReduxStore();
  return <Provider store={store}>{children}</Provider>;
}
