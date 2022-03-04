import logo from './logo.svg';
import React from "react"
import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import classnames from "classnames"
import {useState} from "react"
import {Modal, Select } from "antd"
import Icon from "./components/Icon"
import {NbConfigProvider,NbDatePicker,NbSearch,NbCascader, NbBadge,NbSteps,NbPages,NbTabs,NbPersonalLayout,NbButtons,NbSelectButton, NbDropdown, NbMenu, NbSelectCom, NbInput, NbAccount, NbPassword,NbSmallSelect, NbConfirm, NbDialog} from "./components/"
import { options } from 'less';
const {Option} = Select;
function App() {
  const [modal, contextHolder] = Modal.useModal()
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
    console.log(props);
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
  const [list, setList] = useState([{label:'选项一', value:1},{label:2, value:2},{label:3, value:3}])
  return (
    <div className="App">
      <NbConfigProvider>
        <NbDatePicker></NbDatePicker>
      </NbConfigProvider>
      <div style={{width:'400px', margin:'auto'}}>
       <NbSearch></NbSearch>
      </div>
     
      <NbInput></NbInput>
      <NbCascader options={
        [
          {
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
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          }
        ]
      }></NbCascader>
      <h2 onClick={()=>{
        setCurrent(2)
      }}>点击改变步骤条</h2>
      <NbSteps current={current}></NbSteps>
      <NbBadge count={8}></NbBadge>
      <NbPages></NbPages>
      <NbTabs selectIndex={index} changeTab={(i)=>{
        console.log(i);
        setIndex(i)
      }}></NbTabs>
      
      <NbSelectButton options={options} multiple={true} onClick={(i)=>{
        checked[i]=!checked[i];
        setChecked(checked)
      }} checked={checked}>按钮</NbSelectButton>
      <NbPersonalLayout index={menuIndex} menuClick={(i)=>{
        let item = pMenu[i]
        setCurcom(item.com)
        setMenuIndex(i)
      }} menu={pMenu}>
        {curcom}
      </NbPersonalLayout>
      <NbButtons type={'icon'} icon={'dakaiyanjing'}>123</NbButtons>
      <NbSelectCom size="small" mode={"multiple"} check={true} placeholder={'00000000000000000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSelectCom>
      
      <h2>下拉框<span className="iconfont icon-gou"></span></h2>
      <NbDropdown trigger={['click']} arrow={true} DropdownMenu={<NbMenu selectable={true} menuList={[1,2,3,4,5,6]}><a>123s</a></NbMenu>} DropdownTitle={<a>hello</a>}></NbDropdown>
      <h2>不同宽度下拉框</h2>
      <NbSmallSelect optionslist={optionslist} ></NbSmallSelect>
      <h2>输入框</h2>
      <div><NbInput size={'large'} /></div>
      <br></br>
      <div><NbInput placeholder="请输入" size={'small'} /></div>
      <h2>输入账号</h2>
      <div><NbAccount allowClear size="large" /></div>
      <br/>
      <div><NbPassword onChange={(e)=>{setPassword(e.target.value)}} value={value} size="large" /></div>
      <span className={
        classnames({
          "iconfont":true,
          "icon-gou":true
        })
      }></span>
      <h2>按钮</h2>
      {/* <NbButton onClick={()=>console.log('hello')} type="primary"> */}
        {/* <i>123</i>
      </NbButton> */}
      <h2 onClick={()=>{
        setIsModalVisible(!isModalVisible)
      }}>点击出现弹窗</h2>
      <h2>小下拉框</h2>
      <NbSelectCom content={
        test
      } size="small" placeholder={'00000000000000000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSelectCom>
      <h2>中下拉框</h2>
      <NbSelectCom size="middle" placeholder={'00000000000000000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSelectCom>
      <h2>大下拉框</h2>
      <NbSelectCom size="large" placeholder={'00000000000000000000000000000000000000000'} optionslist={optionslist} onSelect={(value)=>{
        console.log(value);
      }}>
      </NbSelectCom>
      
      
      <h2 onClick={()=>{
        setIsModalVisible(!isModalVisible)
      }}>提醒-确定弹窗</h2>
      <NbConfirm onCancel={()=>setIsModalVisible(!isModalVisible)} onOk={()=>setIsModalVisible(!isModalVisible)} twoline={true} visible={isModalVisible}>
        是否确定重启
      </NbConfirm>
      <NbDialog onCancel={()=>setIsModalVisible(!isModalVisible)} visible={isModalVisible}></NbDialog>
    </div>
  );
}

export default App;
