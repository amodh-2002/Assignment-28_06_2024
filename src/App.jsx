import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Cards from "./components/Cards";
import Grid from "./components/Grid";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/grid",
        element: <Grid />,
      },
      {
        path: "/cards/card1",
        element: <Card1 />,
      },
      {
        path: "/cards/card2",
        element: <Card2 />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
