import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Counter from "src/components/Counter";
import Home from "src/components/Home";
// import Sidebar from "src/layouts/sidebar/Sidebar";
import { routeEnums } from "./routeEnums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact, { loader as contactLoader } from "src/Contact";
import RouteError from "./RouteError";
// import SideBar, {
//   loader as rootLoader,
//   action as rootAction,
// } from "src/SideBar";
// import EditContact, { action as editAction } from "src/EditContact";

import NotFound from "./NotFound";

const AppNavigator = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <SideBar />,
    //   errorElement: <RouteError />,
    //   loader: rootLoader,
    //   action: rootAction,
    //   children: [
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //       loader: contactLoader,
    //     },
    //     {
    //       path: "contacts/:contactId/edit",
    //       element: <EditContact />,
    //       loader: contactLoader,
    //       action: editAction,
    //     },
    //   ],
    // },
    {
      path: routeEnums.HOME,
      element: <Home />,
      errorElement: <RouteError />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="" element={<Sidebar />}>
            <Route index element={<Home />} />
            <Route path={routeEnums.HOME} element={<Home />} />
            <Route path={routeEnums.COUNTER} element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  );
};

export default AppNavigator;
