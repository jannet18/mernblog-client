import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { UserContextProvider } from "./userContext";
import CreatePost from "./components/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
// import { useEffect, useState } from "react";

function App() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/")
  //     .then((res) => res.json())
  //     .then((users) => setUsers(users));
  //   console.log(users);
  // });

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
