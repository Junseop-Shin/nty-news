import React from "react";
import { Routes, Route } from "react-router-dom";
import AllNews from "./pages/AllNews";
import ScrappedNews from "./pages/ScrappedNews";
import GNB from "./components/GNB";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GNB />}>
        <Route path="/" element={<AllNews />} />
        <Route path="/scrap" element={<ScrappedNews />} />
      </Route>
    </Routes>
  );
}

export default App;
