import { lazy, LazyExoticComponent } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthGuard } from "@/shared/ui";

type Component = LazyExoticComponent<() => JSX.Element>;

const BaseLayout: Component = lazy(() => import("@/app/layouts/BaseLayout"));
const Home: Component = lazy(() => import("@/pages/home/ui/home"));
const Login: Component = lazy(() => import("@/pages/login/ui/login"));
const NotFound: Component = lazy(
  () => import("@/pages/not-found/ui/not-found"),
);

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      element: (
        <AuthGuard>
          <BaseLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
