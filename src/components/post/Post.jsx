import React from "react";
import "./Post.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({
  _id,
  title,
  summary,
  content,
  cover,
  createdAt,
  author,
}) => {
  return (
    <>
      <div className="container">
        <div className="post">
          <div className="imgContainer">
            <Link to={`/post/${_id}`}>
              <img src={"http://localhost:4000/" + cover} alt="/" />
            </Link>
          </div>
          <div className="postContainer">
            <h2 className="postTitle">{title}</h2>
            <p className="postDescription">{summary}</p>
            <div>
              <p className="info">
                <a href="/" className="author">
                  {" "}
                  By ~ {author?.username}
                </a>
                <time>{formatISO9075(new Date(createdAt))}</time>
                {/* <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time> */}
              </p>
              <Link to={`/post/${_id}`}>
                <button className="more_btn" onClick={content}>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div className="post">
<div className="content">
  <h2>{title}</h2>
  <p className="info">
    <a href="/" className="author">
      {author?.username}
    </a>
    <time>{formatISO9075(new Date(createdAt))}</time>
    <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
  </p>
  <p>{summary} </p>
</div>
</div> */
}
