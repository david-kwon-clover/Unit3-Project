import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bio from "./routes/Bio.jsx";
import Experience from "./routes/Experience.jsx";
import Portfolio from "./routes/Portfolio.jsx";
import Nav from "./Nav.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => (
  <>
    <header className="bg-red-200 h-[15%] w-full mt-2 px-4 flex justify-center items-center">
      <Nav />
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
