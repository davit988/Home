import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";
import { useEffect, useState } from "react";

import "./Use.css";

const Use = () => {
  const { name } = useParams();

  const [userr, setUserr] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setUserr(json.users));
  }, []);

  let usersss = userr.find((elm) => elm.firstName === name);
  console.log(usersss);
 
  return (
    <section>
      <div className="container">
        <div className="userInfo">
          <div className="use">
            <h1>User</h1>
            <h2>
              <span>First Name -</span> {}
            </h2>
            <h2>
              <span>Last Name -</span> 
            </h2>
            <h2>
              <span>Maiden Name -</span> 
            </h2>
            <p>
              <span>Age -</span> 
            </p>
            <p>
              <span>Email -</span> 
            </p>
          </div>
          <GoBack />
        </div>
      </div>
    </section>
  );
};

export default Use;
