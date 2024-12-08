import {createBrowserRouter,} from "react-router-dom";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/about";
import { Contact } from "../pages/user/contact";
import { Cart } from "../pages/user/Cart";
import { ProductPage } from "../pages/user/ProductPage";
import { ProductDetailsPage } from "../pages/user/ProductDetailsPage";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { UserLayout } from "../layout/UserLayout";
import { ErrorPages } from "../pages/shared/ErrorPages";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProfilePage } from "../pages/user/ProfilePage";
import { MentorLayout } from "../layout/MentorLayout";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<UserLayout/>,
    errorElement:<ErrorPages/>,
    children:[
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element:<Contact/>,
      },
      {
        path: "product",
        element:<ProductPage/>,
      },
      {
        path: "productDetails/:id",
        element:<ProductDetailsPage/>,
      },
      {
        element:<ProtectedRoute/>,
        path:"user",
        children:[
          {
            path: "whishlist",
            element:<h1>Wishlist</h1>,
          },
          {
            path: "profile",
            element:<ProfilePage/>,
          },
          {
            path: "cart",
            element:<Cart/>,
          },
          {
            path: "order",
            element: <h1>orders page</h1>,
          },
        ]
      },
    ]
  },
  ]);