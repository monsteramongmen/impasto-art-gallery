import { Suspense, Fragment, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

type RoutesType = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: RoutesType;
}[];

export const renderRoutes = (routes: RoutesType = []): JSX.Element => (
  <Suspense>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i.toString()}
            path={route.path as string}
            element={
              <Guard>
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component />}
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: RoutesType = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./content/Home/head")),
  },
  {
    exact: true,
    path: "/aboutus",
    component: lazy(() => import("./content/AboutUs/AboutUs")),
  },
  {
    exact: true,
    path: "/contactus",
    component: lazy(() => import("./content/ContactUs/ContactUs")),
  },
  {
    exact: true,
    path: "/completed-projects",
    component: lazy(() => import("./content/completed-projects/index")),
  },
  {
    exact: true,
    path: "/ongoing-projects",
    component: lazy(() => import("./content/ongoing-prohects/index")),
  },
  // {
  //   exact: true,
  //   path: "/admin",
  //   component: lazy(() => import("./content/Login/Login")),
  // },
  // {
  //   exact: true,
  //   path: "/admin/dashboard",
  //   component: lazy(() => import("./content/AdminDashBoard/head")),
  // },
  {
    exact: true,
    path: "*",
    component: () => <Navigate to="/" />,
  },
];

export default routes;
