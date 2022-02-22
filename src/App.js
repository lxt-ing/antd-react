import logo from './logo.svg';
import React from "react"
import './App.css';
import {useState} from "react"
import {Modal, Select} from "antd"
import {NbButton, NbDropdown, NbDialog, NbMessage,NbMenu, NbSelect, NbSmallSelect, NbLargeSelect} from "./components/"
const {Option} = Select;
function Text(props){
  return (
    <div>{props.name}个</div>
  )
}
function App() {
  const [modal, contextHolder] = Modal.useModal()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [optionslist, setOptionslist] = useState([
    {value:1, label:1},
    {value:2, label:'选项最多显示一行选项最多显示一行选项最多显示一行...'}
  ])
  const [list, setList] = useState([{label:1, value:1},{label:2, value:2}])
  return (
    <div className="App">
      <h2>下拉框<span className="iconfont icon-gou"></span></h2>
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu selectable={true} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      <h2>按钮</h2>
      <NbButton onClick={()=>console.log('hello')} type="primary">
        <i>123</i>
      </NbButton>
      <h2 onClick={()=>{
        setIsModalVisible(!isModalVisible)
      }}>点击出现弹窗</h2>
      <br />
      <br />
      <NbSmallSelect placeholder={'000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSmallSelect>
      <br />
      <br />
      <NbLargeSelect placeholder={'00000000000000000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbLargeSelect>
    </div>
  );
}

export default App;
