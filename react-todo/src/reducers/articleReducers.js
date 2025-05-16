export const articleActionType = {
  init: "INIT",
  append: "APPEND",
};

export function articleReducers(state, action) {
  const { type, payload } = action;

  if (type === articleActionType.init) {
    return { ...payload };
  }

  return state;
}
