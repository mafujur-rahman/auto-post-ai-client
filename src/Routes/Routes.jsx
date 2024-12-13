import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Pages/Home/Home";
import LoginRegisterPage from "../layout/Pages/LoginRegisterPage/LoginRegisterPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path: "/login-register",
          element: <LoginRegisterPage />
        }
      ]
    },
  ]);