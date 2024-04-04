import * as React from "react";
import './index.css'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import NextPage from "./layout/NextPage.jsx";
import NextPage2 from "./layout/NextPage2.jsx";
import LastPage from "./layout/LastPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "NextPage",
    element: <NextPage/>,
  },
  {
    path: "NextPage2",
    element: <NextPage2/>,
  },
  {
    path: "LastPage",
    element: <LastPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);