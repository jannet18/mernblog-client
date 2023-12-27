import React from "react";
import "./Page.css";
import { useParams } from "react-router-dom";
import Comments from "../../comments/Comments";

function SinglePage() {
  const { slug } = useParams();
  const data = await(slug);
  return (
    <div className="single_container">
      <div className="infoContainer">
        <div className="textContainer">
          <h1 className="textTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            perspiciatis. Quod quisquam nam recusandae, dolor beatae eius
            facilis voluptates sint dolorem architecto soluta saepe, neque sequi
            quasi sapiente in vel.
          </h1>
          <div className="userContainer">
            <div className="userImage">
              <img src="./aberdare.jpeg" alt="" className="image" />
            </div>
            <div className="userName">
              <span className="user_name">Jane Doe</span>
              <span className="date">1/1/2024</span>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src="./aberdare.jpeg" alt="" className="image" />
        </div>
        <div className="content">
          <div className="single_post">
            <div className="decsription">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                architecto saepe quas eligendi in sit libero. A placeat sint
                quae optio labore quos, nulla iusto neque iste, corrupti
                voluptatem vel.
              </p>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam
                fuga exercitationem mollitia hic eveniet neque ea molestiae at
                expedita eius quam ullam architecto velit quos ipsum, ratione,
                accusantium pariatur.
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis minima quaerat debitis dignissimos magni quos, a
                consequuntur doloremque iure similique optio accusantium placeat
                animi rerum quidem nihil libero est? Rem. Repellat, facilis
                deserunt ut consequuntur saepe dolor cum eius provident
                perspiciatis exercitationem autem accusamus voluptatibus
                corrupti illum sequi! Amet ipsum temporibus soluta veritatis
                esse quasi odit commodi blanditiis doloribus. Iste.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis minima quaerat debitis dignissimos magni quos, a
                consequuntur doloremque iure similique optio accusantium placeat
                animi rerum quidem nihil libero est? Rem. Repellat, facilis
                deserunt ut consequuntur saepe dolor cum eius provident
                perspiciatis exercitationem autem accusamus voluptatibus
                corrupti illum sequi! Amet ipsum temporibus soluta veritatis
                esse quasi odit commodi blanditiis doloribus. Iste.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis minima quaerat debitis dignissimos magni quos, a
                consequuntur doloremque iure similique optio accusantium placeat
                animi rerum quidem nihil libero est? Rem. Repellat, facilis
                deserunt ut consequuntur saepe dolor cum eius provident
                perspiciatis exercitationem autem accusamus voluptatibus
                corrupti illum sequi! Amet ipsum temporibus soluta veritatis
                esse quasi odit commodi blanditiis doloribus. Iste.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis minima quaerat debitis dignissimos magni quos, a
                consequuntur doloremque iure similique optio accusantium placeat
                animi rerum quidem nihil libero est? Rem. Repellat, facilis
                deserunt ut consequuntur saepe dolor cum eius provident
                perspiciatis exercitationem autem accusamus voluptatibus
                corrupti illum sequi! Amet ipsum temporibus soluta veritatis
                esse quasi odit commodi blanditiis doloribus. Iste.
              </p>
            </div>
            <div className="comments">
              <Comments />
              <Comments />
              <Comments />
              <Comments />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
