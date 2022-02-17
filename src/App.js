import logo from './logo.svg';
import './App.css';
import {Test} from "./components/"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test onClick={()=>console.log('hello')} type="primary">
          <i>123</i>
        </Test>
      </header>
    </div>
  );
}

export default App;
