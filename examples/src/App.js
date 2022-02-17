import './App.css';
import {Test} from "./lib/index"
// import {Test} from "check-com"
// console.log(Test,'=---')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test>123</Test>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
