import { useDispatch } from "react-redux";
import { jwtCustomActions } from "./stores/toolkit/slice/jwtSlice";
import { userInfoCustomActions } from "./stores/toolkit/slice/userInfoSlice";
import RouterAppProvider from "./routers/RouterAppProvider";

function App() {
  // const jwt = useSelector((store) => store.jwt);
  const appDispatcher = useDispatch();

  // {jwt: aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk}
  appDispatcher(jwtCustomActions.autoLogin());
  appDispatcher(userInfoCustomActions.load());

  return <RouterAppProvider />;
}

export default App;
