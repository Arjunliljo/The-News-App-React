import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Components/PageComponents/Footer/Footer";
import Header from "./Components/PageComponents/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "./App/LoginSlice";
import { useEffect } from "react";
import { updateData } from "./App/dataSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, articles, authors } = useLoaderData();
  console.log(articles);
  useEffect(() => {
    dispatch(updateData(articles, authors));

    if (isLoggedIn) dispatch(setIsLoggedIn(true));
    else dispatch(setIsLoggedIn(false));
  }, []);

  return (
    <>
      <Header />
      {articles && authors && <Outlet />}
      <Footer />
    </>
  );
}

export default App;
