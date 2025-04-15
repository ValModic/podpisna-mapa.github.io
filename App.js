import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PodpisnaMapa from "./PodpisnaMapa";
import Pomoc from "./Pomoc";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PodpisnaMapa />} />
        <Route path="/pomoc" element={<Pomoc />} />
      </Routes>
    </Router>
  );
}
