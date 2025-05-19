import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { taskSlice } from "./slice/taskSlice";
import { articleSlice } from "./slice/articleSlice";
import { jwtSlice } from "./slice/jwtSlice";
import { userInfoSlice } from "./slice/userInfoSlice";

// Slice Store를 하나의 Store에 할당.
const toolkitStore = configureStore({
  reducer: {
    task: taskSlice.reducer,
    article: articleSlice.reducer,
    jwt: jwtSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export default function ToolkitProvider({ children }) {
  return <Provider store={toolkitStore}>{children}</Provider>;
}
