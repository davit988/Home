import "./Post.css";
import { NavLink } from "react-router-dom";
const Post = ({ elm }) => {
  return (
    <>
      <NavLink to={`/Posts/${elm.title}`} className="post">
        <h1>{elm.title}</h1>
        <h2>{elm.body}</h2>
      </NavLink>
    </>
  );
};

export default Post;
