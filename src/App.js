import React from "react"
import './App.css';
import {useNavigate} from "react-router-dom"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import classnames from "classnames"
import {useState} from "react"
// import {Modal, Select } from "antd"
import Icon from "./components/Icon"
import Home from "./App1"
import IndexHome from "./IndexHome"
// import {NbResult,NbMessage,NbConfigProvider,NbDatePicker, NbRangePicker,NbSearch,NbCascader, NbBadge,NbSteps,NbPages,NbTabs,NbPersonalLayout,NbButton,NbSelectButton, NbDropdown, NbMenu, NbSelectCom, NbInput, NbAccount, NbPassword,NbSmallSelect, NbConfirm, NbDialog} from "./components/"
// const {Option} = Select;
function App() {
  const navigate = useNavigate();
  // const [modal, contextHolder] = Modal.useModal()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [optionslist, setOptionslist] = useState([
    {label:'选项一选项一选项一选项一选项一选项一选项一', value:1},{label:2, value:2},{label:'3', value:3}
  ])
  const [value, setPassword] = useState('123456')
  const [curcom, setCurcom] = useState('zhiwenguanli')
  const [menuIndex, setMenuIndex] = useState(0)
  const [checked, setChecked] = useState([])
  const [options, setOptions] = useState([1, 2, 3])
  const test = (props)=>{
    const {index} = props.data
    return (<div>{index}</div>)
  }
  const pMenu = [{
    title:'指纹管理',
    com:'zhiwenguanli',
    type:'guanbiyanjing',
    color:'red'
  },
  {
    title:'工卡管理',
    com:'gongkaguanli',
    type:'guanbiyanjing',
    color:'red'
  },
  {
    title:'密码管理',
    com:'mimaguanli',
    type:'dakaiyanjing',
    color:'red'
  }]
  const [current, setCurrent] = useState(1)
  const [index, setIndex] = useState(0)
  const [range, setRange] = useState([])
  const [list, setList] = useState([{label:'选项一', value:1},{label:2, value:2},{label:3, value:3}])
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="home" element={<IndexHome/>}></Route>
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
