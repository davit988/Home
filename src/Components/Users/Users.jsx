import User from "./User/User";
import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setUser(json.users));
  }, []);


  return (
    <>  
      <section>
        <div className="container">
          <div className="users">
            {user.map((elm) => {
              return <User elm={elm} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
