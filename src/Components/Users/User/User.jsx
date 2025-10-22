import "./User.css";
import { NavLink } from "react-router-dom";
const User = ({ elm }) => {
  return (
    <>
      <NavLink to={`/Users/${elm.firstName}`} className="user">
        <h1>
          First Name <span>{elm.firstName}</span>
        </h1>
        <h2>
          Last Name <span>{elm.lastName}</span>
        </h2>
        <p>
          Age <span>{elm.age}</span>
        </p>
      </NavLink>
    </>
  );
};

export default User;
