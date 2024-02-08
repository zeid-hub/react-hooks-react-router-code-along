import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;