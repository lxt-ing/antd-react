import './App.css';
import {NbButtons, NbDatePicker, NbConfigProvider} from "./lib/index"
// import {NbSmallSelect, NbSelectCom} from "check-com"
function App() {
  const show = false;
  return (
    <div className="App">
      <h2>small-size 下拉框</h2>
      <NbButtons sence="main-primary">1123</NbButtons>
      <NbConfigProvider>
        <NbDatePicker></NbDatePicker>
      </NbConfigProvider>
    </div>
  );
}

export default App;
