import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jadual from "./pages/Jadual";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadual/:hari" element={<Jadual />} />
      </Routes>
    </BrowserRouter>
  );
}
