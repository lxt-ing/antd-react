import React from 'react'
import { useState } from 'react'
import "./App.css"
import yaoping from './components/images/yaoping.gif'
import { NbTabs, NbProgress, NbSelectCom, NbCascader,NbConfirm, NbDatePicker, NbSearch, NbSelectButton } from './components/'
function App() {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = useState([])
  const [singleChecked, setSingle] = useState(false)
  return (
    <div className="App1">
      <NbTabs selectIndex={index} onChange={(index)=>{setIndex(index)}}></NbTabs>
      <NbProgress type="line" percent="50"></NbProgress>
      <NbSelectCom optionslist={[{label:1, value:1}]} onChange={(e)=>{
        console.log(e);
      }}></NbSelectCom>
      <NbCascader></NbCascader>
      <h2 onClick={()=>setVisible(!visible)}>点击</h2>
      <NbConfirm visible={visible} onCancel={()=>setVisible(false)}></NbConfirm>
      <NbDatePicker></NbDatePicker>
      <NbSearch></NbSearch>
      {/* <NbSelectButton checked={checked} onChange={(i, arr)=>{console.log(i, arr);}}>
        hello
      </NbSelectButton> */}
      <NbSelectButton checked={checked} multiple={true} options={[12,23,34]} onChange={(i, arr)=>{setChecked(arr.slice())}}></NbSelectButton>
    </div>
  )
}

export default App
