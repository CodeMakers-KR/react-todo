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
  done(taskId, setError) {
    return async (dispatcher) => {
      // fetch
      try {
        await doneTask(taskId);
        // dispatch
        dispatcher(taskActions.done({ taskId }));
      } catch (e) {
        setError(e.message || "완료처리를 할 수 없습니다.");
      }
    };
  },
  allDone(setError) {
    return async (dispatcher) => {
      try {
        // fetch
        await allDoneTask();
        // dispatch
        dispatcher(taskActions.allDone());
      } catch (e) {
        setError(e.message || "일괄 완료처리를 할 수 없습니다.");
      }
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
