import { createSlice } from "@reduxjs/toolkit";
import {
  addTask,
  allDoneTask,
  doneTask,
  loadTask,
} from "../../../http/taskHttp";

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

// Custom Actions (Thunks - Toolkit 기능)
export const taskCustomActions = {
  load() {
    return async (dispatcher) => {
      // fetch
      const taskList = await loadTask();
      // dispatch -> dispatcher
      dispatcher(taskActions.init(taskList));
    };
  },
  done(taskId) {
    return async (dispatcher) => {
      // fetch
      await doneTask(taskId);
      // dispatch
      dispatcher(taskActions.done({ taskId }));
    };
  },
  allDone() {
    return async (dispatcher) => {
      // fetch
      await allDoneTask();
      // dispatch
      dispatcher(taskActions.allDone());
    };
  },
  add(task, dueDate, priority) {
    return async (dispatcher) => {
      // fetch
      const addResponse = await addTask(task, dueDate, priority);
      // dispatch
      dispatcher(
        taskActions.add({ id: addResponse.taskId, task, dueDate, priority })
      );
    };
  },
};
