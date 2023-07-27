import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import MainPage from "./MainPage";

const App = () => {
  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
