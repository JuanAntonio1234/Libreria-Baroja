import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div>
      <div>I am the Header</div>
      <Outlet/>
      <div>I am the Footer</div>
    </div>
  )
}

export default Root
