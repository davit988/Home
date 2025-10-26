import { useParams } from "react-router-dom";
import GoBack from "../../GoBack/GoBack";
import { useEffect, useState } from "react";

import "./Pos.css";

const Pos = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="posInfo">
          <div className="Pos">
            <h1>{post.title}</h1>
            <h2>{post?.body}</h2>
            <h3>
              <span>Views</span> {post?.views}
            </h3>
          </div>
          <GoBack />
        </div>
      </div>
    </section>
  );
};

export default Pos;
