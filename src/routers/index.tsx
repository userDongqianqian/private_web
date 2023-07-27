import App from "../pages/home/App";

import Landing from "../pages/landing";
import Page404 from "../pages/404";
export default [
  {
    path: "/",
    element: <App />,
    auth: false,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/404",
    auth: true,
    element: <Page404 />,
  },
];
