import React from 'react'
import {Select} from "antd"
import { useState } from 'react'
import dayjs from "dayjs"
import "./App.css"
import yaoping from './components/images/yaoping.gif'
import {NbNumberCounter, NbSwitch, NbArrow, NbRadio, NbRadioGroup, NbCheckbox,NbCheckboxGroup, NbDatePicker,NbTabs,NbMessage, NbRangePicker, NbDropdown, NbMenu,NbSearch,NbSelectButton, NbSelectCom} from "./components/"
// import { NbTabs, NbProgress, NbSelectCom, NbCascader,NbConfirm,
//    NbDatePicker, , NbSelectButton, NbMenu,NbDropdown,NbMessage, NbResult, NbSteps,NbRangePicker, NbAccount, NbBadge, NbPages, NbButton, NbInput,NbDialog } from './components/'
function App() {
  const menuContent = ({data})=>{
   return (<div>{data.index}</div>)
  }
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState(0)
  const [date, setDate] = useState(dayjs())
  const [date1, setDate1] = useState([])
  const [checked1, setChecked1] = useState([])
  const [checked, setChecked] = useState(true)
  const [checked0, setChecked0] = useState(false)
  const [singleChecked, setSingle] = useState(false)
  const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzho`  u',
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
    <div className="App1" style={{margin:'auto', width:'300px'}}>
      <NbNumberCounter type="danger" value={value} onChange={(value)=>{
        console.log(value);
        setValue(value)
      }}></NbNumberCounter>
      <NbSwitch></NbSwitch>
      <button onClick={()=>{
        setChecked(!checked)
      }}>打开</button>
      <NbArrow open={checked}></NbArrow>
      <NbRadioGroup defaultValue={1}>
        <NbRadio value={1}></NbRadio>
        <NbRadio value={2}></NbRadio>
        <NbRadio value={3}></NbRadio>
      </NbRadioGroup>
      <NbCheckboxGroup defaultValue={['A']} onChange={(value)=>{
        console.log(value, '---致');
      }}>
        <NbCheckbox value={'A'} disabled />
        <NbCheckbox value={'B'} indeterminate={false} />
        <span>hello</span>
      </NbCheckboxGroup>
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu selectable={true} content={menuContent} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      <NbSelectCom size={'large'} optionslist={[{label:1, value:1}, {label:1, value:2}, {label:1, value:3}]} onChange={()=>{
      }}></NbSelectCom>
      <NbTabs selectIndex={index} onChange={(index)=>{setIndex(index)}} type="title"></NbTabs>
       {/* <NbSelectCom optionslist={[{label:1, value:1}]} onChange={()=>{
      }}></NbSelectCom> */}
      {/* <NbSelectButton checked={checked1} options={[12,23,34]} onChange={(data)=>{
        setChecked1(data.slice())
      }}></NbSelectButton> */}
      {/* <NbLeftMenu></NbLeftMenu> */}
      {/* 
      <NbProgress type="line" percent="50"></NbProgress>
    
      <h2 onClick={()=>setVisible(!visible)}>点击</h2>
      <NbConfirm visible={visible} onCancel={()=>setVisible(false)}></NbConfirm>
      */}

      {/* <NbDatePicker onChange={(date, dateString)=>{
        console.log(date, dateString)
        setDate(date)
      }} defaultValue={date}></NbDatePicker> 
      <NbRangePicker onChange={(date, dateString)=>{
        setDate1(date)
        console.log(date);
      }} defaultValue={date1}></NbRangePicker> */}
      {/* <h2 onClick={()=>{
        // NbMessage.success({
        //   content:'123'
        // })
        NbMessage.success({
          content:'123'
        })
      }}>信息</h2>
      <NbSearch onSearch={(val)=>search(val)}></NbSearch> */}
      {/* <NbSelectButton checked={checked} onChange={()=>{
        setChecked(!checked)
      }}>
        hello
      </NbSelectButton>
      
   
      <NbMenu menuList={[1,2,3]} content={content}>
        {/* <div>hello</div> */}
      {/* </NbMenu>
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu onSelect={(data)=>{
        console.log(data);
      }} selectable={true} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      
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
