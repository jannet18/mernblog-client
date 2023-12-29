import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { Register } from "./pages/Register";
import { UserContextProvider } from "./userContext";
import CreatePost from "./components/CreatePost";
import PostPage from "./pages/Blogpage/PostPage";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import Blog from "./pages/Blogpage/Blog";
import Footer from "./components/Footer/Footer";
import EditPost from "./pages/Edit/EditPost.jsx";
// import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <ThemeProvider>
          {/* <ThemeToggle /> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/post/edit/:id" element={<EditPost />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
