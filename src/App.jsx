import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Hero from "./pages/home/sections/Hero";
import AboutProduct from "./pages/home/sections/AboutProduct";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> },{
        path: "/hero", element: <Hero />
      },{
        path: "/aboutproduct", element: <AboutProduct />
      }, {
        path: "/aboutinnovator", element: <AboutInnovator />
      },{
        path: "/showcase", element: <Showcase />
      }, {
        path: "/contact", element: <Contact />
      }, {
        path: "/footer", element: <Footer />
      }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
