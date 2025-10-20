import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/Users">
              Users
            </NavLink>
            <NavLink className="link" to="/Posts">
              Posts
            </NavLink>
            <NavLink className="link" to="/Comments">
              Comments
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
