import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "./Components/PageComponents/Footer/Footer";
import Header from "./Components/PageComponents/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoggedIn,
  setIsLogginPage,
  setIsSignInPage,
} from "./App/Login/LoginSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isPathLogin = location.pathname.includes("login");
  const isPathSignIn = location.pathname.includes("SignIn");

  const login = useLoaderData();

  useEffect(() => {
    if (login) dispatch(setIsLoggedIn(true));
    else dispatch(setIsLoggedIn(false));
  }, [login]);

  useEffect(() => {
    if (isPathLogin) dispatch(setIsLogginPage(true));
    else dispatch(setIsLogginPage(false));

    if (isPathSignIn) dispatch(setIsSignInPage(true));
    else dispatch(setIsSignInPage(false));
  }, [isPathLogin, isPathSignIn]);

  const { isLoggedIn } = useSelector((state) => state.loginEvent);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
