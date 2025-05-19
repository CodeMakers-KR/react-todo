import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwt slice store",
  initialState: "",
  reducers: {
    init(state, action) {
      localStorage.setItem("token", action.payload);
      state = action.payload;
    },
    remove(state) {
      localStorage.removeItem("token");
      state = "";
    },
  },
});

export const jwtActions = jwtSlice.actions;
