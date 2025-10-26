import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";
import { useEffect, useState } from "react";

import "./Use.css";

const Use = () => {
  const { id } = useParams();
console.log(id);

  const [userr, setUserr] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setUserr(json));
  }, []);
console.log(userr);

  
  
 
  return (
    <section>
      <div className="container">
        <div className="userInfo">
          <div className="use">
            <h1>User</h1>
            <h2>
              <span>First Name -</span> {userr?.firstName}
            </h2>
            <h2>
              <span>Last Name -</span> {userr?.lastName}
            </h2>
            <h2>
              <span>Maiden Name -</span> {userr?.maidenName}
            </h2>
            <p>
              <span>Age -</span> {userr?.age}
            </p>
            <p>
              <span>Email -</span> {userr?.email}
            </p>
          </div>
          <GoBack />
        </div>
      </div>
    </section>
  );
};

export default Use;
