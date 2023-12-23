import React from "react";
import { Link } from "react-router-dom";
import "./MenuCategories.css";

function MenuCategories() {
  return (
    <div className="category_container">
      <h2 className="menu_subtitle">{"Discover by topic"}</h2>
      <h1 className="menu_title">Categories</h1>
      <div className="categoryList">
        <Link to="/blog?cat=style" className="categoryItem travel">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Travel
        </Link>
        <Link to="/blog?cat=style" className="categoryItem fashion">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Fashion
        </Link>
        <Link to="/blog?cat=style" className="categoryItem health">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Health
        </Link>
        <Link to="/blog?cat=style" className="categoryItem weight-loss">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Weight
        </Link>
        <Link to="/blog?cat=style" className="categoryItem develop">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Outdoor
        </Link>
        <Link to="/blog?cat=style" className="categoryItem hiking">
          <img src="./aberdare.jpeg" alt="" width={20} height={20} />
          Hiking
        </Link>
      </div>
    </div>
  );
}

export default MenuCategories;
