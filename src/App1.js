import React from "react"
import {useState} from "react"
import yaoping from "./components/images/yaoping.gif"
import {NbResult} from "./components/"
// import {NbResult,NbMessage,NbConfigProvider,NbDatePicker, NbRangePicker,NbSearch,NbCascader, NbBadge,NbSteps,NbPages,NbTabs,NbPersonalLayout,NbButton,NbSelectButton, NbDropdown, NbMenu, NbSelectCom, NbInput, NbAccount, NbPassword,NbSmallSelect, NbConfirm, NbDialog} from "./components/"

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App1">
      <h1 onClick={()=>{
        // setVisible(!visible)
        const loadingItem =  NbResult.loading({
          bodyStyle:{height:'520px'},
          width:'720px',
          icon:<img src={yaoping} style={{width:'100%'}}/>,
          content:
          <div>
            <span>正在打开抽屉</span>
            <br />
            <span style={{fontSize:'36px',color: "rgba(24, 29, 65, 0.5)" }}>请耐心等待...</span>
          </div>
        })
      }}>点击</h1>
    </div>
  );
}

export default App;
