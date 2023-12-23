import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  return (
    <div className="card_container">
      <div className="imgContainer">
        <img src="./aberdare.jpeg" alt="" className="image" />
      </div>
      <div className="textContainer">
        <div className="detail">
          <span className="date">23/12/2023</span>
          <span className="category">CULTURE</span>
        </div>
        <Link to="/">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          </h3>
        </Link>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptatibus exercitationem cumque repudiandae architecto vero soluta?
          Ratione modi facere laboriosam optio dignissimos in blanditiis ipsa
          aperiam. Accusantium fugiat expedita cupiditate?
        </p>
        <Link to="/" className="link">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
