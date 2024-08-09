import { createBrowserRouter } from "react-router-dom";
import { Home } from "../component/Home";
import { LandingPage } from "../component/LandingPage";

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
