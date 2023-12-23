import { useEffect, useState } from "react";
import { Post } from "../components/post/Post";
import Category from "../components/Category/Category";
import CardList from "../components/Card/CardList";
import Menu from "../components/Menu/Menu";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div>
      <h1 className="title">
        <b>Hello, Reader!</b> <br />
        Discover my research and creative discoveries.
      </h1>
      {posts.length > 0 && posts.map((post, id) => <Post key={id} {...post} />)}
      <div className="container">
        <Category />
        <div className="content">
          <CardList />
          <Menu />
        </div>
      </div>
    </div>
  );
}
