import React from "react";
import Home from "./Home";
import MenuComponent from "./MenuComponent";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

const BodyComponent = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default BodyComponent;