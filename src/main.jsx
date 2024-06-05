import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Articles from "./Components/ArticlesComponents/Articles.jsx";
import Article from "./Components/ArticlesComponents/Article.jsx";
import Authors from "./Components/AuthorComponents/Authors.jsx";
import Author from "./Components/AuthorComponents/Author.jsx";
import IndexPage from "./Components/PageComponents/IndexPage/IndexPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/articles" />,
      },
      {
        path: "/articles",
        element: <IndexPage />,
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
