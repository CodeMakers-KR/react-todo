import { createSlice } from "@reduxjs/toolkit";

const initialTask = [];

export const taskSlice = createSlice({
  name: "task slice store",
  initialState: initialTask,
  reducers: {
    init(state, action) {
      if (state.length === 0) {
        Object.assign(state, initialTask);
        state.push(...action.payload);
      }
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
