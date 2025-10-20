import "./Post.css";

const Post = ({ elm }) => {
  return (
    <>
     
      <div className="post">
        <h1>{elm.title}</h1>
        <h2>{elm.body}</h2>
      </div>
    </>
  );
};

export default Post;
