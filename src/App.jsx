import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Header/Home";
import About from "./Header/About";
import Contact from "./Header/Contact";
import AppLayout from "./Footer/AppLayout";
import Login from "./Header/Login";
import User from "./User/User";
// import ErrorPage from "./User/ErrorPage"; // Corrected name
import Github from "./Github/Github";
import NotFound from "./User/NotFound"; // New Not Found Page

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />, // Corrected Error Page
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/user/:id", element: <User /> },
      {
        path: "/github",
        element: <Github username="Mdrsonumaurya" />
      },
      { path: "*", element: <NotFound /> } // Handle unknown routes
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
