export const actionType = {
  done: "DONE",
  allDone: "ALL-DONE",
  add: "ADD",
};

/**
 * Reducer는 자체적으로 state를 관리한다.
 * Reducer만의 State가 별도로 존재.
 * @param {*} state reducer가 관리하는 state.
 * @param {*} action state를 변경시킬 객체.
 */
export default function taskReducers(state, action) {
  // type: action의 종류. (DONE, ALL-DONE, ADD)
  // payload: state를 변화시킬 데이터 - type에 대한 파라미터. (완료할 태스크의 아이디, 빈 객체, 데이터가 있는 객체.)
  const { type, payload } = action;

  if (type === actionType.add) {
    // 새로운 태스크를 state에게 등록시킨다.
    const { task, dueDate, priority } = payload;
    return [
      ...state,
      {
        id: "task_" + (state.length + 1),
        task: task,
        dueDate: dueDate,
        priority: priority,
        done: false,
      },
    ];
  } else if (type === actionType.done) {
    const { taskId } = payload;

    const newState = [...state];
    const taskIndex = newState.findIndex((task) => task.id === taskId);
    newState[taskIndex].done = true;
    return newState;
    // 지정된 태스크의 done을 true로 바꾼다.
  } else if (type === actionType.allDone) {
    // 모든 태스크의 done을 true로 바꾼다.
    return state.map((task) => {
      if (!task.done) {
        task.done = true;
      }
      return task;
    });
  }

  // 새롭게 만들어지는 state를 반환시키면, Reducer의 state가 변경된다.
  return state;
}
