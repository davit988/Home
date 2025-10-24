import "./Comments.css";
import Comment from "./Comment/Comment";
const Comments = ({ comments }) => {
  console.log(comments);

  return (
    <>
      <section>
        <div className="container">
          <div className="comments">
            {comments.map((elm) => {
              return <Comment elm={elm} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
