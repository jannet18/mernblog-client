import React from "react";
import CardList from "../../components/Card/CardList";
import Menu from "../../components/Menu/Menu";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog_container">
      <h1 className="category_title">Style Blog</h1>
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Blog;
