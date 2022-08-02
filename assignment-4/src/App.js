
import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Bookings from './components/booking';
import Detail from './components/detail';
import Private from './components/private';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/movies/:id" element={<Detail />}></Route>
        <Route path="/private" element={<Private />}></Route>
      </Routes>
    </div>
  );
}

export default App;
