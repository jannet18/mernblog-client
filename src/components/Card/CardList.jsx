import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList() {
  return (
    <div className="container">
      <h1 className="title">Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Pagination /> */}
    </div>
  );
}

export default CardList;
