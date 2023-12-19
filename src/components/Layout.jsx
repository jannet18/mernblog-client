import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <main className="container">
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
