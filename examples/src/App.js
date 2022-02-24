import './App.css';
import {NbSmallSelect, NbSelectCom} from "./lib/index"
// import {NbSmallSelect} from "check-com"
function App() {
  console.log(NbSmallSelect);
  const show = false;
  return (
    <div className="App">
      <h2>small-size 下拉框</h2>
      <NbSmallSelect options={[]} optionslist={[{value:1,label:1}]}></NbSmallSelect>
      <NbSelectCom size="middle" placeholder={'00000000000000000000000000000000000000000'} optionslist={[{value:1,label:1}]} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSelectCom>
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
