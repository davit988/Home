import Post from "./Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
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
