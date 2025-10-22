import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";

import "./Pos.css";

const Pos = ({ posts }) => {
  const { title } = useParams();

  let post = posts.find((elm) => elm.title === title);

  return (
    <section>
      <div className="container">
        <div className="posInfo">
          <div className="Pos">
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h3>
              <span>Views</span> {post.views}
            </h3>
          </div>
          <GoBack />
        </div>
      </div>
    </section>
  );
};

export default Pos;
