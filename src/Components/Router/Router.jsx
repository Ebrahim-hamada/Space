import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./../../Components/Layout/Layout";
import Home from "./../../Pages/home/Home";
import Destination from "./../../Pages/destination/Destination";
import Crew from "./../../Pages/crew/Crew";
import Technology from "./../../Pages/technology/Technology";
import Error from "./../../Pages/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/destination", element: <Destination /> },
        { path: "/crew", element: <Crew /> },
        { path: "/technology", element: <Technology /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
