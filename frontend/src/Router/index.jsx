import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import Home from '../pages/Home/Home'
import PersonalLibrary from '../pages/PersonalLibrary/PersonalLibrary'
import Library from '../pages/Library/Library'
import SignIn from '../pages/Sign In/SignIn'
import SignUp from "../pages/Sign Up/SignUp"
import ErrorElement from '../pages/ErrorElement/ErrorElement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
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
          path: "/personal-library",
          element: <PersonalLibrary />
        },
        {
          path: "/library",
          element: <Library />
        }
        
    ]
  }
])

export default router
