import React from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Layout from "./components/Layout";
import List from "./routes/List";
import Loader from "./components/Loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/*",
          element: <NotFound />,
        },
        {
          path: "/",
          element: <List />,
        },
      ],
    },
  ]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return !loading || router.state.location.pathname === "/" ? (
    <RouterProvider router={router}></RouterProvider>
  ) : (
    <Loader loading={true} />
  );
}

export default App;
