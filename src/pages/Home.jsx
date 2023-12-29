import { useEffect, useState } from "react";
import { Post } from "../components/post/Post";
// import hero from "./hero.jpeg";
// import hero from "./hero.jpeg";
// import Category from "../components/Category/Category";
// import CardList from "../components/Card/CardList";
// import Menu from "../components/Menu/Menu";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div>
      <img src="./hero.jpeg" alt="" width={1200} />
      <h1 className="title">
        <b>Hello, Reader!</b> <br />
        Discover my travel ideas research and creative explorable discoveries.
      </h1>
      <p className="welcome">
        Looking for an unforgettable African safari? Then you're at the right
        place. Our team of destination experts will help you plan a tailor-made
        safari experience that is perfect for you. We've travelled all over
        Southern and East Africa and have been designing custom safari
        itineraries since 2005. We have offices in the UK and South Africa. We
        offer full financial protection, transparent pricing and a flexible
        cancellation policy for your peace of mind. Whatever your dream safari –
        we'll make it come true!
      </p>
      <h2 className="title">Safe, Affordable, Unforgettable African Safaris</h2>
      <video src=""></video>
      {posts.length > 0 && posts.map((post, id) => <Post key={id} {...post} />)}
      <div className="container">
        {/* <Category /> */}
        <div className="content">
          {/* <CardList /> */}
          {/* <Menu /> */}
        </div>
      </div>
    </div>
  );
}
