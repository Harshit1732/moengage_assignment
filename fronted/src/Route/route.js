import React from "react";

import { Route, Router, Routes, Switch } from "react-router-dom";
import Singlepage from "../pages/singlepage";
import HomePage from "../component/Home";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/brewery/:id" element={<Singlepage />} />
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
};

export default AllRoute;
