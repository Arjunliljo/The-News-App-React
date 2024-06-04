import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img
          src="https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png"
          alt="footer-logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-contents">
        <ul className="footer-ul">
          <li className="footer-ul-contents">About Us |</li>
          <li className="footer-ul-contents">Privacy Policy |</li>
          <li className="footer-ul-contents">Contact Us |</li>
          <li className="footer-ul-contents">Grievance Redressal</li>
        </ul>
        <div className="copyright">
          ©Facstory Media Private Limited 2022
          <div>
            <strong> Powered by Quintype</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
