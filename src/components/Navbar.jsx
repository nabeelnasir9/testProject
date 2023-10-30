import Logo from "../assets/images/blog.png";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="NavbarMainWrapper">
      <div className="Navbar-MainConainer">
        <div className="Navbar-Logo">
          <img src={Logo} alt="" style={{ height: "auto", width: "60px" }} />
        </div>
        <div className="Navbar-elements">
          <div>
            <ul className="Navbar-All-elements">
              <li className="Navbar-li-elements">Home</li>
              <li className="Navbar-li-elements">About</li>
              <li className="Navbar-li-elements">Contact</li>
            </ul>
          </div>
          <div className="Navbar-Buttons">
            <button className="Navbar-Button_1">LOGIN</button>
            <button className="Navbar-Button_2">SIGNUP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
