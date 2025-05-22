import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie slice",
  initialState: {},
  reducers: {
    reset(state) {
      state.results = undefined;
      state.page = 0;
    },
    init(state, action) {
      Object.assign(state, action.payload);
    },
    append(state, action) {
      state.page = action.payload.page;
      state.results.push(...action.payload.results);
    },
  },
});

export const movieActions = movieSlice.actions;
