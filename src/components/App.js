import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePageAnimation/HomePage";
import Menu from "./Menu/Menu";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
