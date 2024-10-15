import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bio from "./routes/Bio.jsx";
import Experience from "./routes/Experience.jsx";
import Portfolio from "./routes/Portfolio.jsx";
import Nav from "./components/Nav.jsx";
import "./index.css";
import '@fontsource-variable/inter'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => (
  <>
    <header className="h-[15%] w-full mt-2 px-4 flex flex-col justify-center items-center">
      <Nav />
      <span class="w-full h-[2px] bg-gradient-to-r from-white/0 via-white to-white/0"></span>
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <App /> 
      },
      {
        path: "/bio",
        element: <Bio />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
