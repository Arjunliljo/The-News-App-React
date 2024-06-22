import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import Article from "./Components/ArticlesComponents/Article.jsx";
import Authors from "./Components/AuthorComponents/Authors.jsx";
import IndexPage from "./Components/PageComponents/IndexPage/IndexPage.jsx";
import ContactUsPage from "./Components/PageComponents/UtilityComponents/ContactUsPage.jsx";
import AuthorPage from "./Components/AuthorComponents/AuthorPage.jsx";
import NotFoundPage from "./Components/PageComponents/UtilityComponents/NotFoundPage.jsx";
import Login from "./Components/PageComponents/LoginSignUp/Login.jsx";
import SignIn from "./Components/PageComponents/LoginSignUp/SignIn.jsx";
import store from "./App/store.js";
import AddNews from "./Components/PageComponents/IndexPage/AddNews.jsx";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

export async function loader() {
  try {
    await axios.get(`${BASE_URL}/auth/verify`, { withCredentials: true });
    return true;
  } catch (error) {
    const data = error.response;
    console.log(data);
    return false;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader,
    children: [
      {
        index: true,
        element: <Navigate to="articles" />,
      },
      { path: "articles", element: <IndexPage /> },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
      {
        path: "articles/article/:articleId",
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
        path: "login",
        element: <Login />,
      },
      {
        path: "SignIn",
        element: <SignIn />,
      },
      {
        path: "addnews",
        element: <AddNews />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
