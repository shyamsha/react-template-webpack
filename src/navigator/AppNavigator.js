import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "src/components/Counter";
import Home from "src/components/Home";
import Sidebar from "src/layouts/sidebar/Sidebar";
import { routeEnums } from "./routeEnums";

const AppNavigator = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Sidebar />}>
            <Route index element={<Home />} />
            <Route path={routeEnums.HOME} element={<Home />} />
            <Route path={routeEnums.COUNTER} element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppNavigator;
