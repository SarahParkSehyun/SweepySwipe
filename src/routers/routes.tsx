import { RouteObject } from "react-router-dom";
import PathContants from "./pathConstants";
import Home from "@/pages/home";
import DefaultLayout from "@/layout/defaultLayout";
import Error404 from "@/pages/error/404";
import Login from "@/pages/Login";
import GuideBook from "@/pages/GuideBook";
import DetailGuide from "@/pages/DetailGuide";
import Settings from "@/pages/Settings";
import AuthCallback from "@/pages/AuthCallback";

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    errorElement: <Error404 />,
    children: [
      { path: PathContants.Home, element: <Home /> },
      { path: PathContants.Login, element: <Login /> },
      { path: PathContants.AuthCallback, element: <AuthCallback /> },
      { path: PathContants.Setting, element: <Settings /> },
      { path: PathContants.GuideBook, element: <GuideBook /> },
      { path: PathContants.DetailGuide, element: <DetailGuide /> },
    ],
  },
];
