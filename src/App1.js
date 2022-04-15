import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import dayjs from 'dayjs'
import './App.css'
import yaoping from './components/images/yaoping.gif'
import {
  NbResult,
  NbPassword,
  NbProgress,
  NbCascader,
  NbButton,
  NbTable,
  NbNumberCounter,
  NbSwitch,
  NbArrow,
  NbRadio,
  NbRadioGroup,
  NbCheckbox,
  NbCheckboxGroup,
  NbTabs,
  NbMessage,
  NbRangePicker,
  NbDropdown,
  NbMenu,
  NbSearch,
  NbSelectButton,
  NbSelectCom,
  NbDatePicker,
  NbExpireDate,
  NbSteps
} from './components/'
// import { NbTabs, NbProgress, NbSelectCom, NbCascader,NbConfirm,
//    NbDatePicker, , NbSelectButton, NbMenu,NbDropdown,NbMessage, NbResult, NbSteps,NbRangePicker, NbAccount, NbBadge, NbPages, NbButton, NbInput,NbDialog } from './components/'
function App() {
  const menuContent = ({ data }) => {
    return <div>{data.index}</div>
  }
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState(0)
  const [date, setDate] = useState(dayjs('2024-03-12'))
  const [date1, setDate1] = useState([])
  const [checked1, setChecked1] = useState([])
  const [checked, setChecked] = useState(true)
  const [checked0, setChecked0] = useState(false)
  const [singleChecked, setSingle] = useState(false)
  const options = [
    {
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
    },
  ]
  const content = ({ data }) => {
    return <h1>{data.index}</h1>
  }
  const search = (val) => {
    // console.log('searching', val);
  }
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      title: '位置',
      dataIndex: 'pos',
      width: 226,
    },
    {
      title: '品名',
      dataIndex: 'name',
      strong: true,
      width: 404,
    },
    {
      title: '规格',
      dataIndex: 'specification',
      width: 192,
    },
    {
      title: '中文',
      dataIndex: 'zh',
      width: 156,
    },
    {
      title: '英文数字',
      dataIndex: 'num',
      width: 148,
    },
    {
      title: '数量',
      dataIndex: 'number',
      width: 186,
      strong: true,
      align: 'center',
      // operate:true
    },
    {
      title: '单位',
      dataIndex: 'unit',
      width: 168,
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'operator',
      operate:true
    }
  ]
  useEffect(() => {
    setTimeout(()=>{
      const data = [
        {
          key: '1',
          pos: '柜子的名称-0000',
          name: "品名超过十二个的中间省略, 超过用省略号表示",
          specification: '0000…0000',
          zh: '中文内容',
          num: '00000000',
          number: 123,
          unit: '盒',
          children:{
            columns:[
              {
                title: '品名',
                dataIndex: 'name',
                width: 156,
              },
              {
                title: '批号',
                dataIndex: 'batchNo',
                width: 220,
              },
              {
                title: '效期',
                dataIndex: 'expiredDate',
                width: 300,
                align: 'center',
                strong: true,
                operate:true
              },
              {
                title:'数量',
                dataIndex:'number',
                width:300,
                align:'center',
                operate:true
              },
              // 默认子级无法操作子级，只能父级操作
              // {
              //   title: '',
              //   dataIndex: 'operator',
              //   operate:true,
              //   width: 200
              // }
            ],
            dataSource:[
              {
                name: "盐酸滴液",
                batchNo:"AH00010002",
                expiredDate:"2020-02-02",
                number:123
              },
              {
                name: "盐酸滴液2",
                batchNo:"AH00010003",
                expiredDate:"2024-02-02",
                number:13
              }
            ]
          }
        }
      ]
      data.forEach(item=>{
        let value = item.name;
        item.name = (opt)=>{
          if (value && value.length && value.length > 12) {
          return <div style={{color:'red'}}>{value
            .slice(0, 6)
            .concat('...')
            .concat(value.slice(-6))}</div>
          }
          return value
        }
        // item['number-opt'] = (scopeData) => {
        //   const { rowIndex} = scopeData
        //   const [fIdx, lIdx] = rowIndex.split('-')
        //   let newData = data
        //   let item = newData[fIdx];
        //   if(lIdx !== undefined){
        //     // 操作的是children行
        //     item = item.children.dataSource[lIdx]
        //   }
        //   return <NbNumberCounter value={item.changedNumber} onChange={(value)=>{
        //         item.changedNumber = value;
        //         setDataSource(newData.slice())
        //         console.log(item);
        //   }}></NbNumberCounter>
        // }
        item['operator'] = (scopeData) => {
          const { rowIndex, editing } = scopeData
          // 行索引 、行子表格索引
          const [fIdx, lIdx] = rowIndex.split('-')
          let newData = data
          let item = newData[fIdx];
          if(lIdx !== undefined){
            // 操作的是children行
            item = item.children.dataSource[lIdx]
          }
          return !editing ?
            <div style={{ display: 'flex' }}>
              <NbButton
                type="text-minor"
                onClick={() => {
                  const list = []
                  const childrenList = ['number', 'expiredDate']
                  if(!lIdx){
                    // 修改父数据并修改子数据
                    list.forEach(key=>{
                      item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key]
                    })
                    // 当前行子表格全部添加对应属性
                    item.children.dataSource.forEach(list=>{
                      childrenList.forEach(childKey=>{
                        list[`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`] = list[childKey]
                      })
                    })
                  }else{
                    childrenList.forEach(key=>{
                      item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key] 
                    })
                  }
                  item.editing = true;
                  // data 赋值给newData 
                  // data 赋值给dataSource
                  // 操作newData 赋值给setDataSource 无法更新
                  // 不能用newData无法更新 需要使用newData.slice()
                  setDataSource(newData.slice())
                }}
              >
                编辑
              </NbButton>
              <div style={{ opacity: 0, width: '20px' }}></div>
              <NbButton
                type="text-primary"
                onClick={() => {
                  newData.splice(rowIndex, 1)
                  setDataSource(newData.slice())
                }}
              >
                删除
              </NbButton>
            </div>
          : <div style={{ display: 'flex' }}>
              <NbButton
                type="text-minor"
                onClick={() => {
                  const list = []
                  const childrenList = ['number', 'expiredDate']
                  item['editing'] = false;
                  if(!lIdx){
                    // 修改父数据并修改子数据
                    list.forEach(key=>{
                      item[key] = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
                    })
                    // 当前行子表格全部添加对应属性
                    item.children.dataSource.forEach(list=>{
                      childrenList.forEach(childKey=>{
                        list[childKey] = list[`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`]
                        console.log(list,`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`);
                      })
                    })
                  }else{
                    childrenList.forEach(key=>{
                      item[key]  = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
                    })
                  }
                  setDataSource(newData.slice())
                }}
              >
                保存
              </NbButton>
              <div style={{ opacity: 0, width: '20px' }}></div>
              <NbButton
                type="text-primary"
                onClick={() => {
                  item['editing'] = false;
                  setDataSource(newData.slice())
                }}
              >
                取消
              </NbButton>
            </div>
          
        }
        const childData = item.children.dataSource
        if(childData?.length){
          childData.forEach(child=>{
            child['operator'] = (scopeData) => {
              const { rowIndex, editing } = scopeData
              // 行索引 、行子表格索引
              const [fIdx, lIdx] = rowIndex.split('-')
              let newData = data
              let item = newData[fIdx];
              if(lIdx !== undefined){
                // 操作的是children行
                item = item.children.dataSource[lIdx]
              }
              return !editing ?
                <div style={{ display: 'flex' }}>
                  <NbButton
                    type="text-minor"
                    onClick={() => {
                      const list = []
                      const childrenList = ['number']
                      list.forEach(key=>{
                        item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key]
                      })
                      childrenList.forEach(key=>{
                        item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key] 
                      })
                      item.editing = true;
                      setDataSource(newData.slice())
                    }}
                  >
                    编辑
                  </NbButton>
                  <div style={{ opacity: 0, width: '20px' }}></div>
                  <NbButton
                    type="text-primary"
                    onClick={() => {
                      newData[fIdx].children.dataSource.splice(rowIndex, 1)
                      setDataSource(newData.slice())
                    }}
                  >
                    删除
                  </NbButton>
                </div>
              : <div style={{ display: 'flex' }}>
                  <NbButton
                    type="text-minor"
                    onClick={() => {
                      const list = []
                      const childrenList = ['number']
                      item['editing'] = false;
                      list.forEach(key=>{
                        item[key] = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
                      })
                      childrenList.forEach(key=>{
                        console.log(`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`);
                        item[key] = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
                      })
                      setDataSource(newData.slice())
                    }}
                  >
                    保存
                  </NbButton>
                  <div style={{ opacity: 0, width: '20px' }}></div>
                  <NbButton
                    type="text-primary"
                    onClick={() => {
                      item['editing'] = false;
                      setDataSource(newData.slice())
                    }}
                  >
                    取消
                  </NbButton>
                </div>
              
            }
            // 数字器
            child['number-opt'] = (scopeData) => {
              const { rowIndex} = scopeData
              const [fIdx, lIdx] = rowIndex.split('-')
              let newData = data
              let item = newData[fIdx];
              if(lIdx !== undefined){
                // 操作的是children行
                item = item.children.dataSource[lIdx]
              }
              return <NbNumberCounter value={item.changedNumber} onChange={(value)=>{
                    item.changedNumber = value;
                    setDataSource(newData.slice())
              }}></NbNumberCounter>
            }
            // 日期组件
            child['expiredDate-opt'] = (scopeData) => {
              const { rowIndex} = scopeData
              const [fIdx, lIdx] = rowIndex.split('-')
              let newData = data
              let item = newData[fIdx];
              if(lIdx !== undefined){
                // 操作的是children行
                item = item.children.dataSource[lIdx]
              }
              return <NbExpireDate placement="bottom" yearCount="sta" date={dayjs(item.expiredDate)} onChange={(date)=>{
                item.changedExpiredDate = dayjs(date).format('YYYY-MM-DD');
                setDataSource(newData.slice())
              }}></NbExpireDate>
            }
          })
        } 
      })
      setDataSource(data)
    }, 1000)
  }, [])
  useEffect(()=>{
    console.log(dataSource,'===dataSource改变啦')
  },[dataSource])
  return (
    <div className="App1" style={{ margin: 'auto' }}>
      <NbProgress type="circle" percent="50"></NbProgress>
      <NbSelectButton
        checked={checked1}
        options={['选购相依', 23, '嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻']}
        onChange={(data) => {
          setChecked1(data.slice())
        }}
      ></NbSelectButton>
      <NbPassword></NbPassword>
      {/* <NbButton type="text-minor">123</NbButton> */}
      <NbCascader options={options}></NbCascader>
      <NbTable
        dataSource={dataSource}
        columns={columns}
        fold={true}
        foldRow={(data) => {
          setDataSource(data)
        }}
      ></NbTable>
      <NbNumberCounter
        type="danger"
        value={value}
        onChange={(value) => {
          // console.log(value);
          setValue(value)
        }}
      ></NbNumberCounter>
      <NbSwitch></NbSwitch>
      <button
        onClick={() => {
          setChecked(!checked)
        }}
      >
        打开
      </button>
      <NbArrow open={checked}></NbArrow>
      <NbRadioGroup defaultValue={1}>
        <NbRadio value={1}></NbRadio>
        <NbRadio value={2}></NbRadio>
        <NbRadio value={3}></NbRadio>
      </NbRadioGroup>
      <NbCheckboxGroup
        defaultValue={['A']}
        onChange={(value) => {
          // console.log(value, '---致');
        }}
      >
        <NbCheckbox value={'A'} disabled>
          <span>hello</span>
        </NbCheckbox>
        <NbCheckbox value={'B'} indeterminate={false}>
          <span>hello</span>
        </NbCheckbox>
      </NbCheckboxGroup>
      <NbDropdown
        trigger={['click']}
        arrow={true}
        DropdownMenu={
          <NbMenu
            selectable={true}
            content={menuContent}
            menuList={[1, 2, 3, 4, 5, 6]}
          >
            <a>123s</a>
          </NbMenu>
        }
        DropdownTitle={<a>hello</a>}
      ></NbDropdown>
      <NbSteps stepOptions={
        [<div><h1>步骤一</h1></div>, <div>步骤二</div>, <div>步骤三</div>]
      }></NbSteps>
      <NbSelectCom
        size={'middle'}
        optionslist={[
          { label: 1, value: 1 },
          { label: 1, value: 2 },
          { label: 1, value: 3 },
        ]}
        onChange={() => {}}
      ></NbSelectCom>
      <NbTabs
        selectIndex={index}
        onChange={(index) => {
          setIndex(index)
        }}
        type="title"
      ></NbTabs>
      {/* <NbDatePicker onChange={(date, dateString)=>{
        console.log(date, dateString)
        setDate(date)
      }} defaultValue={date}></NbDatePicker>  */}
      <NbRangePicker onChange={(date, dateString)=>{
        setDate1(date)
        console.log(date);
      }} defaultValue={date1}></NbRangePicker>
      {/* <NbSelectCom optionslist={[{label:1, value:1}]} onChange={()=>{
      }}></NbSelectCom> */}
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
      <h2
        onClick={() => {
          // NbMessage.success({
          //   content:'123'
          // })
          NbMessage.success({
            content: '123',
          })
        }}
      >
        信息
      </h2>
      <NbSearch onSearch={(val) => search(val)}></NbSearch>
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
      
      
      <NbRangePicker></NbRangePicker>
      <NbAccount></NbAccount>
      <NbBadge count={10}></NbBadge>
      <NbPages></NbPages>
      <NbButton>123</NbButton>
      <NbInput></NbInput>
      <NbDialog onCancel={()=>setVisible(false)} visible={visible}></NbDialog> */}{' '}
      */}
    </div>
  )
}

export default App
