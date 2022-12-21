import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";

import {Home} from "../components/pages/Home"
import {Giin} from "../components/pages/Giin"
import {Login} from "../components/pages/Login"
import {Questions} from "../components/pages/Questions"
import {ErrorPage} from "../components/pages/ErrorPage"

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/giin",
      element: <Giin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/questions",
      element: <Questions />,
    },
  ]);
  