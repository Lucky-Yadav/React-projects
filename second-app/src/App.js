import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="main">
          <div className="heading1"><h1>Mobile Operating System</h1></div>
          <div className="list">
            <li>Android</li>
            <li>Blackberry</li>
            <li>iphone</li>
            <li>Windows Phone</li>
          </div>
          <div className="heading2"><h1>Mobile Manufacturers</h1></div>
          <div className="list">
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li className="dot" >Apple</li>
          </div>
        </div>
    </div>
  );
}

export default App;
