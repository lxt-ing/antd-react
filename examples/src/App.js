import './App.css';
// import {NbSmallSelect} from "./lib/index"
import {NbSmallSelect} from "check-com"
function App() {
  console.log(NbSmallSelect);
  const show = false;
  return (
    <div className="App">
      <h2>small-size 下拉框</h2>
      <NbSmallSelect></NbSmallSelect>
      {/* <h2>button</h2>
      <NbButton onClick={()=>{
        NbMessage.info('hello')
      }}>
        <div>23</div>
      </NbButton>
      <NbDialog visible={show}>
        hello
      </NbDialog> */}
    </div>
  );
}

export default App;
