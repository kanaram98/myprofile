import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import { HeaderComponent } from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
