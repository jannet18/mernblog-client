import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_container">
      <div className="info">
        <div className="logo">
          <img src="../aberdare.jpeg" alt="bloggy" width={50} height={50} />
          <h1 className="logo_text">Bloggy</h1>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          rerum enim in neque perspiciatis asperiores laborum rem quia veritatis
          porro ipsam blanditiis culpa impedit odio, minus cupiditate, tempore
          molestiae. Excepturi?
        </p>
        {/* <div className="social">
          <Link>
            <img
              className="social_icon"
              src="../icons/facebook.png"
              alt="facebook"
              width={18}
              height={18}
            />
          </Link>
          <Link>
            <img
              className="social_icon"
              src="../icons/instagram.png"
              alt="instagram"
              width={18}
              height={18}
            />
          </Link>
          <Link>
            <img
              className="social_icon"
              src="../icons/twitter.png"
              alt="twitter"
              width={18}
              height={18}
            />
          </Link>
          <Link>
            <img
              className="social_icon"
              src="../icons/tik-tok.png"
              alt="tiktok"
              width={18}
              height={18}
            />
          </Link>
          <Link>
            <img
              className="social_icon"
              src="../icons/youtube.png"
              alt="/youtube"
              width={18}
              height={18}
            />
          </Link>
        </div> */}
      </div>
      <div className="links">
        <div className="list">
          <span className="listTitle">Links</span>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="list">
          <span className="listTitle">Tags</span>
          <Link to="/">Style</Link>
          <Link to="/">Fashion</Link>
          <Link to="/">Health</Link>
          <Link to="/">Outdoor</Link>
        </div>
        <div className="list">
          <span className="listTitle">Social</span>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Tiktok</Link>
          <Link to="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
