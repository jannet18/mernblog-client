import React from "react";

function Blog() {
  return (
    <div className="blog_container">
      <h1 className="title">Style Blog</h1>
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Blog;
