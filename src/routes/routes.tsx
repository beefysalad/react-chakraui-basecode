import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home/component";
import { LandingPage } from "../page/LandingPage/component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing-page/:id",
    element: <LandingPage />,
  },
]);
