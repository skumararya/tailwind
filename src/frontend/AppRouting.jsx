import React from "react";
import Home from "./container/home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./container/About";
import UnderDevelopment from "./container/UnderDevelopment";
const AppRouting = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/underdevelopment" element={<UnderDevelopment />} />
      <Route path="*" element={<UnderDevelopment />} />
    </Routes>
  );
};

export default AppRouting;
