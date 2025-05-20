import { createSlice } from "@reduxjs/toolkit";
import { getQueries } from "../../../utils/location";

const initialJwt = {};

export const jwtSlice = createSlice({
  name: "jwt slice store",
  initialState: initialJwt,
  reducers: {
    init(state, action) {
      localStorage.setItem("token", action.payload);
      state.jwt = action.payload;
    },
    remove(state) {
      localStorage.removeItem("token");
      Object.assign(state, initialJwt);
    },
  },
});

export const jwtActions = jwtSlice.actions;

export const jwtCustomActions = {
  autoLogin() {
    return (dispatcher) => {
      const queryMap = getQueries();
      if (queryMap.jwt) {
        dispatcher(jwtActions.init(queryMap.jwt));
      }
    };
  },
};
