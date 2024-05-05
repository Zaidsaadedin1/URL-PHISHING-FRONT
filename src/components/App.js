import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePageAnimation/HomePage";
import Menu from "./Menu/Menu";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
