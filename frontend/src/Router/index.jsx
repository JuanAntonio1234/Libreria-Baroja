import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import Home from '../pages/Home/Home'
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
        }
        
    ]
  }
])

export default router
