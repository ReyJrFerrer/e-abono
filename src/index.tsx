import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Calculator } from "./components/Calculator";
import { CropsLanding } from "./components/CropsLanding";
import { PotatoPage } from "./components/PotatoPage";
import { CabbagePage } from "./components/CabbagePage";
import { AboutUs } from "./components/AboutUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/crops" element={<CropsLanding />} />
        <Route path="/crops/potato" element={<PotatoPage />} />
        <Route path="/crops/cabbage" element={<CabbagePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
