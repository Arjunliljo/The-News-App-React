import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Main from "./Components/PageComponents/Main.jsx";
import Articles from "./Components/ArticlesComponents/Articles.jsx";
import Article from "./Components/ArticlesComponents/Article.jsx";
import Authors from "./Components/AuthorComponents/Authors.jsx";
import Author from "./Components/AuthorComponents/Author.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
      {
        path: "authors",
        element: <Authors />,
      },
      {
        path: "authors/:authorId",
        element: <Author />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
