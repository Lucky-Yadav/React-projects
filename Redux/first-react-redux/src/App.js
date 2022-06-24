
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../src/reducer/useReducer';

export const userContext = createContext()


const Routing = () => {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </div>
    )
}
  
function App() {
  
  
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{state,dispatch}}> 
      <Routing/>
    </userContext.Provider>
  );
}

export default App;
