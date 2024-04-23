import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import Home from '../pages/Home/Home'
import Library from '../pages/Library/Library'
import SignIn from '../pages/Sign In/SignIn'
import SignUp from "../pages/Sign Up/SignUp"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
        {
            path: '/',
            element: <SignIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/library",
          element: <Library />
        }
        
    ]
  }
])

export default router
