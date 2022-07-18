import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Appointment from "./components/Appointment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home  />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Appointment" element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
