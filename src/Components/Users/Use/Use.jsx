import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";

import "./Use.css";

const Use = ({ users }) => {
  const { name } = useParams();

  let user = users.find((elm) => elm.firstName === name);

  return (
    <section>
      <div className="container">
        <div className="userInfo">
          <div className="use">
            <h1>User</h1>
            <h2>
              <span>First Name -</span> {user.firstName}
            </h2>
            <h2>
              <span>Last Name -</span> {user.lastName}
            </h2>
            <h2>
              <span>Maiden Name -</span> {user.maidenName}
            </h2>
            <p>
              <span>Age -</span> {user.age}
            </p>
            <p>
              <span>Email -</span> {user.email}
            </p>
          </div>
          <GoBack />
        </div>
      </div>
    </section>
  );
};

export default Use;
