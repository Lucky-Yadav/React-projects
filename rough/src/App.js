
import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
