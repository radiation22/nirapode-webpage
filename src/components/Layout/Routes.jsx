import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Main from "./Main";
import Privacy from "../Privacy/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    // errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
    ],
  },
]);
