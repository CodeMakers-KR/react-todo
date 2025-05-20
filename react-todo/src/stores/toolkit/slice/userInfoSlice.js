import { createSlice } from "@reduxjs/toolkit";
import { loadMyInformation } from "../../../http/articleHttp";
import { getQueries } from "../../../utils/location";

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

export const userInfoCustomActions = {
  load(navigate, destinationUrl, jwt) {
    return async (dispatcher) => {
      // localStorage 검사
      // const queryMap = getQueries();

      if (!jwt) {
        jwt = getQueries().jwt;
      }

      if (jwt) {
        // fetch
        const userInfoJson = await loadMyInformation();
        // dispatch
        dispatcher(userInfoActions.init(userInfoJson));

        // 자동 로그인 이후에 destinationUrl로 이동시키기.
        navigate(destinationUrl);
      }
    };
  },
};
