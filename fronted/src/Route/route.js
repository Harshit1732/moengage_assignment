import React from "react";

import { Route,  Routes } from "react-router-dom";
import Singlepage from "../pages/singlepage";
import HomePage from "../component/Home";
import Signup from "../pages/Signuppage";
import Login from "../pages/Loginpage";
import Home from "../pages/Homepage";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/brewery/:id" element={<Singlepage/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default AllRoute;
