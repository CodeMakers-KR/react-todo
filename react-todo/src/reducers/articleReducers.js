export const articleActionType = {
  init: "INIT",
  append: "APPEND",
};

export function articleReducers(state, action) {
  const { type, payload } = action;

  if (type === articleActionType.init) {
    return { ...payload };
  } else if (type === articleActionType.append) {
    return { ...payload, data: [...state.data, ...payload.data] };
  }

  return state;
}
