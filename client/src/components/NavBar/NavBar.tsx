import { Link, NavLink } from "react-router";
import SiteLogo from "../SiteLogo/SiteLogo";
import "./NavBar.scss";
import { ROUTES } from "../../routes/Route";
const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_content">
          <div className="nav_left">
            <SiteLogo />
          </div>
          <div className="nav_middle">
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
          </div>
          <div className="nav_right">
            <Link to={ROUTES.LOGIN} className="nav_right_signIn">
              Sign In
            </Link>
            <Link to={ROUTES.REGISTRATION} className="nav_right_signUp">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
