import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
