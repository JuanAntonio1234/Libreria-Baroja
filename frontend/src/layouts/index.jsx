import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./index.css"


function Root() {
  return (
    <div id="page">
      <Header/>
      <Outlet/>
      <div>I am the Footer</div>
    </div>
  )
}

export default Root;