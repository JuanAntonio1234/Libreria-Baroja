import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./index.css"


function Root() {
  return (
    <div id="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root;