import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo slice store",
  initialState: {},
  reducers: {
    init(state, action) {
      const userInfo = action.payload;
      for (let key in userInfo) {
        state[key] = userInfo[key];
      }
    },
    remove(state, action) {
      state = {}; // error 발생할 것 같음.
    },
  },
});

export const userInfoActions = userInfoSlice.actions;
