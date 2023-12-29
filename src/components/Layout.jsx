import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
