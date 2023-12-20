import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="container">
      <h1 className="title">Popular Categories</h1>
      <div className="categories">
        <Link to="/blog?cat=style" className="category travel">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Travel
        </Link>
        <Link to="/blog?cat=style" className="category fashion">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Fashion
        </Link>
        <Link to="/blog?cat=style" className="category health">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Health
        </Link>
        <Link to="/blog?cat=style" className="category weight-loss">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Weight
        </Link>
        <Link to="/blog?cat=style" className="category develop">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Outdoor
        </Link>
        <Link to="/blog?cat=style" className="category hiking">
          <img src="./aberdare.jpeg" alt="" width={50} height={50} />
          Hiking
        </Link>
      </div>
    </div>
  );
}

export default Category;
