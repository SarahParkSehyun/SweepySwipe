import { RouteObject } from "react-router-dom";
import PathContants from "./pathConstants";
import Home from "@/pages/home";
import DefaultLayout from "@/layout/defaultLayout";
import Error404 from "@/pages/error/404";
import Login from "@/pages/Login";

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    errorElement: <Error404 />,
    children: [
      { path: PathContants.Home, element: <Home /> },
      { path: PathContants.Login, element: <Login /> },
    ],
  },
];
