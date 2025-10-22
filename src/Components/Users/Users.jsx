import Nav from "../Nav/Nav";
import User from "./User/User";
import "./Users.css";

const Users = ({ users }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="users">
            {users.map((elm) => {
              return <User elm={elm} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
