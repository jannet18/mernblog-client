import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuCategories from "./MenuCategories";

function Menu() {
  return (
    <div className="menu_container">
      <h2 className="menu_subtitle">{"What's hot"}</h2>
      <h1 className="menu_title">Most Popular</h1>
      <div className="menu_items">
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_travel">Travel</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_fashion">Fashion</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_culture">Culture</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_health">Health</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_food">Food</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_style">Style</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
      </div>
      <MenuCategories />
      <h2 className="menu_subtitle">{"Choosen by Editor"}</h2>
      <h1 className="menu_title">Editor's Pick</h1>
      <div className="menu_items">
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_travel">Travel</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_fashion">Fashion</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_culture">Culture</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_health">Health</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_food">Food</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
        <Link to="/" className="menu_item">
          <div className="img_Container">
            <img src="./aberdare.jpeg" alt="" className="menu_image" />
          </div>
          <div className="text_Container">
            <span className="menu_category menu_style">Style</span>
            <h3 className="post_Title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="menu_detail">
              <span className="username">Jane Doe</span>
              <span className="date">23/12/2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
