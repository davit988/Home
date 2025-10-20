import React from "react";
import "./Comment.css"
const Comment = ({ elm }) => {
  return (
    <>
      {console.log(elm)}
     <div className="comment">
         <h1>{elm.body}</h1>
      <div className="id">
        <h2>Likes {elm.likes}</h2>
        <h2>Post {elm.postId}</h2>
      </div>
     </div>
    </>
  );
};

export default Comment;
