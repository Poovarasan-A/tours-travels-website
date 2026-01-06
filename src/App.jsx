import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModernTravelAbout from "./components/AboutUsDark";
import ModernTravelAboutLight from "./components/AboutUsLight";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModernTravelAboutLight />} />
          <Route path="/dark" element={<ModernTravelAbout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
