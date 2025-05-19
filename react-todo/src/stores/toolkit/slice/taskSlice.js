import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task slice store",
  initialState: [],
  reducers: {
    init(state, action) {
      for (let i = 0; i < state.length; i++) {
        state.shift();
      }
      state.push(...action.payload);
    },
    add(state, action) {
      state.push({ ...action.payload, done: false });
    },
    done(state, action) {
      const index = state.findIndex(
        (task) => task.id === action.payload.taskId
      );

      state[index].done = true;
    },
    allDone(state) {
      for (let i = 0; i < state.length; i++) {
        if (!state[i].done) {
          state[i].done = true;
        }
      }
    },
  },
});

export const taskActions = taskSlice.actions;
