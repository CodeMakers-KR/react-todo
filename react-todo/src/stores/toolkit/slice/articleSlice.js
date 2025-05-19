import { createSlice } from "@reduxjs/toolkit";

const initialArticle = { data: [] };

export const articleSlice = createSlice({
  name: "article slice store",
  initialState: initialArticle,
  reducers: {
    init(state, action) {
      //if (!state.data) {
      Object.assign(state, action.payload);
      //}
      // state.count = action.payload.count;
      // state.hasMore = action.payload.hasMore;
      // state.listSize = action.payload.listSize;
      // state.page = action.payload.page;
      // state.pageCount = action.payload.pageCount;
      // state.status = action.payload.status;
      // state.data.push(...action.payload.data);
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
