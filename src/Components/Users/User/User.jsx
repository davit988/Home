import "./User.css";

const User = ({ elm }) => {
  return (
    <>


      <div className="user">
        <h1>
          First Name <span>{elm.firstName}</span>
        </h1>
        <h2>
          Last Name <span>{elm.lastName}</span>
        </h2>
        <p>
          Age <span>{elm.age}</span>
        </p>
      </div>
    </>
  );
};

export default User;
