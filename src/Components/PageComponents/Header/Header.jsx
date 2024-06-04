import "./Header.css";

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <Navigation />
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
  return (
    <nav className="navigations">
      {/* <!-- menu icon bottom--> */}
      <div className="menu-icon-bottom">
        <span className="material-symbols-outlined"> menu </span>
      </div>

      <ul className="nav-ul">
        <li className="nav-ul__items">Videos</li>
        <li className="nav-ul__items">Opinion</li>
        <li className="nav-ul__items">Newsroom</li>
        <li className="nav-ul__items">Cue Studio</li>
        <li className="nav-ul__items">Movie Review</li>
        <li className="nav-ul__items">Editor's Pick</li>
        <li className="nav-ul__items">Brand Stories</li>
        <li className="nav-ul__items">About Us</li>
      </ul>

      <div className="nav-ul__moon-icon">
        <span className="material-symbols-outlined"> clear_night </span>
      </div>
    </nav>
  );
}
