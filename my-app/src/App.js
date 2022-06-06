import React from "react"
import profile from './lucky.png';
import './App.css';




function App() {
  const [age, setage] = React.useState(18)
  const [count, setCount] = React.useState(1)
  const increase = () => {
    console.log("clicked");
    setage (age+1)
  }
  function decrease() {
    console.log("clicked");
    setage (age-1)
  }
  function detail() {
    console.log("clicked");
    count%2 === 0 ? <h1>details</h1> : <h1>hide details</h1>
    setCount (count+1)
  }
 
  return (
    <div className="App">
      <div className="main">
        <div className="left">
          <div className="img">
            <img src={profile} alt="" />
          </div>
          <div className="data">
          <h2>Name : Lucky Yadav</h2>
            <h3 id='age'>Age : {age}</h3>
          </div>
          <div className="button">
            <button onClick={increase}>increase age</button>
            <button onClick= {decrease}>decrease age</button>
          </div>
          <div className="details">
            <button onClick={detail} id="detail" > Show more details</button>
          </div>
        </div>
        <div className="right">
          <h2>Todo list</h2>
          <div className="list">
            <p id='1'>wake Up</p>
            <p id='2'>drink tea</p>
            <p id='3'>eat maggi</p>
            <p id='4'>sleep</p>
          </div>
          <button>Add more Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
