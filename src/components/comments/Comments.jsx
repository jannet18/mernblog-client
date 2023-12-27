import React from "react";
import "./Coomments.css";
import { Link } from "react-router-dom";

function Comments() {
  const status = "authenticated";
  return (
    <div className="comments_container">
      <h2 className="comments_title">Comments</h2>
      {status === "authenticated" ? (
        <div className="write">
          <textarea
            className="comment_input"
            name=""
            id=""
            placeholder="Write a comment"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      ) : (
        <Link to="/">Login to comment</Link>
      )}
      <div className="comments">
        <div className="comment">
          <div className="user">
            <img src="./aberdare.jpeg" alt="" className="image" />
            <div className="userInfo">
              <span className="username">Jane Doe</span>
              <span className="date">1/01/2023</span>
            </div>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              veritatis rerum sit iste doloribus consequatur eius modi quod.
              Dolore excepturi corrupti voluptate harum esse voluptatum incidunt
              rem laborum, nihil facilis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
