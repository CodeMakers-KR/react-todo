import { createSlice } from "@reduxjs/toolkit";

const initialUserInfo = {};

export const userInfoSlice = createSlice({
  name: "userInfo slice store",
  initialState: initialUserInfo,
  reducers: {
    init(state, action) {
      const userInfo = action.payload;
      Object.assign(state, userInfo);
    },
    remove(state, action) {
      Object.assign(state, initialUserInfo);
    },
  },
});

export const userInfoActions = userInfoSlice.actions;
