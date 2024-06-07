import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Article from "./Components/ArticlesComponents/Article.jsx";
import Authors from "./Components/AuthorComponents/Authors.jsx";
import IndexPage from "./Components/PageComponents/IndexPage/IndexPage.jsx";
import ContactUsPage from "./Components/PageComponents/UtilityComponents/ContactUsPage.jsx";
import AuthorPage from "./Components/AuthorComponents/AuthorPage.jsx";
import NotFoundPage from "./Components/PageComponents/UtilityComponents/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/articles" />,
      },
      {
        path: "articles",
        element: <IndexPage />,
      },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
      {
        path: "articles/article/:authorId",
        element: <AuthorPage />,
      },
      {
        path: "authors",
        element: <Authors />,
      },
      {
        path: "authors/:authorId",
        element: <AuthorPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
