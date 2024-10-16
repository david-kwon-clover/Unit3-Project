import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bio from "./routes/Bio.jsx";
import Experience from "./routes/Experience.jsx";
import Portfolio from "./routes/Portfolio.jsx";
import Nav from "./components/Nav.jsx";
import "./index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import InstagramLogo from './assets/instagram_logo.png';
import TwitterLogo from './assets/twitter_logo.png';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => (
  <>
    <header className="h-[15%] w-full mt-2 px-4 flex flex-col justify-center items-center">
      <Nav />
      <span className="w-full h-[2px] bg-gradient-to-r from-white/0 via-white to-white/0"></span>
    </header>
    <Outlet />
    <footer className="h-[10%] w-full mt-2 px-4 flex flex-col justify-center items-center">
      <span className="w-full h-[2px] bg-gradient-to-r from-white/0 via-white to-white/0"></span>
      <aside className="h-[90%] flex items-center justify-center">
        <p className="text-white font-extrabold mr-4">Let's Connect!</p>
        <a className="h-[70%]" href="https://www.nsa.gov/"><img src={InstagramLogo} className="h-full"/></a>
        <a className="h-[70%]" href="https://www.nsa.gov/"><img src={TwitterLogo} className="h-full"/></a>
      </aside>
    </footer>
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
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
