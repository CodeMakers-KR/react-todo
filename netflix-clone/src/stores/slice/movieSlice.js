import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie slice",
  initialState: {},
  reducers: {
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
