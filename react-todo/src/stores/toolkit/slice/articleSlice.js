import { createSlice } from "@reduxjs/toolkit";
import { loadArticles } from "../../../http/articleHttp";

const initialArticle = { data: [] };

export const articleSlice = createSlice({
  name: "article slice store",
  initialState: initialArticle,
  reducers: {
    init(state, action) {
      Object.assign(state, action.payload);
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

export const articleCustomActions = {
  load(pageNo) {
    return async (dispatcher) => {
      // fetch
      const articleJson = await loadArticles(pageNo);

      // dispatch
      if (pageNo === 0) {
        dispatcher(articleActions.init(articleJson));
      } else {
        dispatcher(articleActions.append(articleJson));
      }
    };
  },
};
