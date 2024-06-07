import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/PageComponents/Footer/Footer";
import Header from "./Components/PageComponents/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
