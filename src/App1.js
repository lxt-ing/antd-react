import React from 'react'
import { useState } from 'react'
import dayjs from "dayjs"
import "./App.css"
import yaoping from './components/images/yaoping.gif'
import {NbDatePicker, NbRangePicker, NbDropdown, NbMenu} from "./components/"
// import { NbTabs, NbProgress, NbSelectCom, NbCascader,NbConfirm,
//    NbDatePicker, NbSearch, NbSelectButton, NbMenu,NbDropdown,NbMessage, NbResult, NbSteps,NbRangePicker, NbAccount, NbBadge, NbPages, NbButton, NbInput,NbDialog } from './components/'
function App() {
  console.log(dayjs)
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [date, setDate] = useState(dayjs())
  const [date1, setDate1] = useState([])
  const [checked1, setChecked1] = useState([])
  const [checked, setChecked] = useState(false)
  const [singleChecked, setSingle] = useState(false)
  const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  }]
  const content = ({data})=>{
    return (
    <h1>{data.index}</h1>
    )
  }
  const search = (val)=>{
    console.log('searching', val);
  }
  return (
    <div className="App1">
      {/* <NbTabs selectIndex={index} onChange={(index)=>{setIndex(index)}}></NbTabs>
      <NbProgress type="line" percent="50"></NbProgress>
      <NbSelectCom optionslist={[{label:1, value:1}]} onChange={()=>{
      }}></NbSelectCom>
      <h2 onClick={()=>setVisible(!visible)}>点击</h2>
      <NbConfirm visible={visible} onCancel={()=>setVisible(false)}></NbConfirm>
      */}
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu onSelect={(data)=>{
        console.log(data);
      }} selectable={true} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      <NbDatePicker onChange={(date, dateString)=>{
        console.log(date, dateString)
        setDate(date)
      }} defaultValue={date}></NbDatePicker> 
      <NbRangePicker onChange={(date, dateString)=>{
        setDate1(date)
        console.log(date);
      }} defaultValue={date1}></NbRangePicker>
      {/* <NbSearch onSearch={(val)=>search(val)}></NbSearch> */}
      {/* <NbSelectButton checked={checked} onChange={()=>{
        setChecked(!checked)
      }}>
        hello
      </NbSelectButton>
      <NbSelectButton checked={checked1} options={[12,23,34]} onChange={(data)=>{
        setChecked1(data.slice())
      }}></NbSelectButton>
      <NbCascader options={options} onChange={(value)=>{
        console.log(value);
      }}></NbCascader>
      <NbMenu menuList={[1,2,3]} content={content}>
        {/* <div>hello</div> */}
      {/* </NbMenu>
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu onSelect={(data)=>{
        console.log(data);
      }} selectable={true} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      <h2 onClick={()=>{
        // NbMessage.success({
        //   content:'123'
        // })
        NbResult.success({
          content:'123'
        })
      }}>信息</h2>
      <NbSteps></NbSteps>
      <NbRangePicker></NbRangePicker>
      <NbAccount></NbAccount>
      <NbBadge count={10}></NbBadge>
      <NbPages></NbPages>
      <NbButton>123</NbButton>
      <NbInput></NbInput>
      <NbDialog onCancel={()=>setVisible(false)} visible={visible}></NbDialog> */} */}
    </div>
  )
}

export default App
