import { createSlice } from "@reduxjs/toolkit";

export const genreSliceStore = createSlice({
  name: "genre slice",
  initialState: [],
  reducers: {
    init(state, action) {
      if (state.length === 0) {
        state.push(...action.payload);
      }
    },
  },
});

export const genreActions = genreSliceStore.actions;
