import React from "react";
import { Routes, Route } from "react-router-dom";

import FormLog from "./pages/FormLog";
import Home from "./pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<FormLog />} path="/" />
      <Route element={<Home />} path="/Home" />
    </Routes>
  );
};

export default MainRoutes;
