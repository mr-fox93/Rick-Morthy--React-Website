import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import { GlobalProvider } from "./context/globalcontext";
import Favorite from "./Favorite";
import MainPage from "./MainPage";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
