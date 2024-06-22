import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Components/PageComponents/Footer/Footer";
import Header from "./Components/PageComponents/Header/Header";
import { useDispatch } from "react-redux";
import { setIsLogginPage, setIsSignInPage } from "./App/Login/LoginSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isPathLogin = location.pathname.includes("login");
  const isPathSignIn = location.pathname.includes("SignIn");

  if (isPathLogin) dispatch(setIsLogginPage(true));
  else dispatch(setIsLogginPage(false));

  if (isPathSignIn) dispatch(setIsSignInPage(true));
  else dispatch(setIsSignInPage(false));
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
