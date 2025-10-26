import Post from "./Post/Post";
import "./Posts.css";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json.posts));
  }, []);

  console.log(posts);

  return (
    <>
      <section>
        <div className="container">
          <div className="posts">
            {posts.map((elm) => {
              return <Post elm={elm} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
