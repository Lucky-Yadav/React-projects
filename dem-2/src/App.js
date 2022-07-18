
import './App.css';
import { useState } from 'react';
  const [data, setdata] = useState[data];
function App() {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(res=> res.json())
  return (
    <div className="App">

      

      {/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */}
    </div>
  );
}

export default App;
