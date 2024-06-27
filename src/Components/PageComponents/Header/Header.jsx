import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../UtilityComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setIsLoggedIn } from "../../../App/Login/LoginSlice";

const BASE_URL = import.meta.env.VITE_URL;

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <Navigation />
      <NavButtons />
    </header>
  );
}

function HeaderTop() {
  return (
    <div className="header-top">
      {/* <!-- logo and search icons --> */}
      <div className="header-top__icon-box">
        {/* <!-- menu icon --> */}
        <div className="menu-icon">
          <span className="material-symbols-outlined"> menu </span>
        </div>

        {/* <!-- logo --> */}
        <img
          src="https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png"
          alt="logo"
        />
      </div>
      {/* <!-- search icon --> */}
      <span className="search-icon">
        <span className="material-symbols-outlined"> search </span>
      </span>
    </div>
  );
}

function Navigation() {
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.loginEvent);

  const dispatch = useDispatch();

  const handleAddNews = (e) => {
    e.preventDefault();
    navigate("addnews");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("login");
  };
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${BASE_URL}/auth/logout`, {
        withCredentials: true,
      });
      console.log(res);
      dispatch(setIsLoggedIn(false));
      console.log("LoggedOut");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navigations">
      {/* <!-- menu icon bottom--> */}
      <div className="menu-icon-bottom">
        <span className="material-symbols-outlined"> menu </span>
      </div>

      <ul className="nav-ul">
        {/* <li className="nav-ul__items">Videos</li>
        <li className="nav-ul__items">Opinion</li>
        <li className="nav-ul__items">Newsroom</li>
        <li className="nav-ul__items">Cue Studio</li>
        <li className="nav-ul__items">Movie Review</li>
        <li className="nav-ul__items">Editor's Pick</li>
        <li className="nav-ul__items">Brand Stories</li>
        <li className="nav-ul__items">About Us</li> */}
      </ul>

      <nav className="functionality">
        <ul>
          {/* {isLoggedIn && (
            <li onClick={handleAddNews}>
              <Button type="secondary">Add Article</Button>
            </li>
          )} */}
          {isLoggedIn ? (
            <li onClick={handleLogout}>
              <Button type="secondary">Logout</Button>
            </li>
          ) : (
            <li onClick={handleLogin}>
              <Button type="secondary">Login</Button>
            </li>
          )}
        </ul>
      </nav>
    </nav>
  );
}

function NavButtons() {
  return (
    <>
      <nav className="pageNav">
        <NavLink to={`articles`}>
          <li className="pageNav__items">Articles</li>
        </NavLink>
        <NavLink to="authors">
          <li className="pageNav__items">Authors</li>
        </NavLink>
      </nav>
    </>
  );
}
