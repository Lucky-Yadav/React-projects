import React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(18)
  const increase = () => {
    console.log("clicked");
    setCount (count+1)
    color()
  }
  function decrease  ()  {
    console.log("clicked");
    setCount (count-1)
    color()
  }
  function Double  ()  {
    console.log("clicked");
    setCount (count*2)
    color()
  }
  function color() {
    
  }
  return (
    <div className="App">
      <div className="main">
        <h1 style={count%2 ===0 ? {color: 'green'} : {color: 'red'}}>count is : {count}</h1>
     <button onClick={increase} >Increase</button>
     <button onClick= {decrease}>Decrease</button>
     <button onClick= {Double}>Double</button>
      </div>
     
    </div>
  );
}

export default App;
