import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article slice store",
  initialState: {},
  reducers: {
    init(state, action) {
      for (let i = 0; i < state.data.length; i++) {
        state.data.shift();
      }
      state.count = action.payload.count;
      state.hasMore = action.payload.hasMore;
      state.listSize = action.payload.listSize;
      state.page = action.payload.page;
      state.pageCount = action.payload.pageCount;
      state.status = action.payload.status;
      state.data.push(...action.payload.data);
    },
    append(state, action) {
      state.count = action.payload.count;
      state.hasMore = action.payload.hasMore;
      state.listSize = action.payload.listSize;
      state.page = action.payload.page;
      state.pageCount = action.payload.pageCount;
      state.status = action.payload.status;
      state.data.push(...action.payload.data);
    },
  },
});

export const articleActions = articleSlice.actions;
