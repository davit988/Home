import "./Comments.css";
import Comment from "./Comment/Comment";
import { useEffect, useState } from "react";

const Comments = () => {

const [comment,setComment] = useState([])

useEffect(() =>{
  fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((json) => setComment(json.comments));
},[])
console.log(comment);

  return (
    <>
      <section>
        <div className="container">
          <div className="comments">
            {comment.map((elm) => {
              return <Comment elm={elm} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
