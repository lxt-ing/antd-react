import React,{useState, useEffect} from 'react'
import "./index.less"
import {Popover, Input} from "antd"
import "antd/lib/popover/style"
import dayjs from "dayjs"
import classnames from "classnames"
import { func } from 'prop-types'
// 1. 默认日期 
// 2. 切换年份 自动选中一月一日
// 3. 切换月份 自动选中一日
// 4. 点击确定了才赋值
export default function NbExpireDate(props) {
  const {date,joinStr="-", onChange=(value)=>{console.log(value);}} = props;
  let selectYear,selectMonth,selectDay, curYear, years;
  let selectDate = dayjs.isDayjs(date) ? dayjs(date) : dayjs(new Date());
  selectYear = selectDate.year();
  selectMonth = selectDate.month()+1;
  selectDay = selectDate.date();
  const [curSelectDay, setCurDay] = useState(selectDate.date())
  const [curSelectMonth, setCurMonth] = useState(selectDate.month()+1)
  const [curSelectYear, setCurYear] = useState(selectDate.year())
  const [curDays, setCurDays] = useState(selectDate.daysInMonth())
  const [days, setDays] = useState([])
  const [newDate, setNewDate] = useState('')
  const [visible, setVisible] = useState(false)
  const [coverDate, setCoverDate] = useState(false)
  curYear = dayjs().year();
  years = [];
  const months = ['1月','2月','3月','4月','5月','6月','7月', '8月','9月','10月','11月','12月']
  for(let i = 0; i<5; i++){
    years.push(curYear+i)
  }
  // 日期点击
  function clickDay(day){
    setCurDay(day)
  }
  // 月份点击
  function clickMonth(month){
    let dateStr = `${curSelectYear}${joinStr}${month}`
    setCurDays(dayjs(dateStr).daysInMonth());
    setCurMonth(month)
    setCurDay(1)
  }
  // 年份点击
  function clickYear(year){
    let dateStr = `${year}${joinStr}01${joinStr}01`
    setCurDays(dayjs(dateStr).daysInMonth());
    setCurYear(year)
    setCurMonth(1)
    setCurDay(1)
  }
  // 格式化日期
  function addZore(value){
    return value < 10 ? '0'+value : value;
  }
  // 确认点击
  function makeSure(){
    onChange(newDate);
    setCoverDate(true)
    setVisible(false)
  }
  function handleVisibleChange(value){
    setVisible(value)
  }
  // 显示隐藏，隐藏判断是否更新日期
  useEffect(()=>{
    if(visible){
      setCoverDate(false)
    }else{
      // 关闭弹窗
      if(!coverDate){
        // 未覆盖原始值，恢复原始日期
        setCurMonth(selectDate.month()+1)
        setCurYear(selectDate.year())
        setCurDay(selectDate.date())
      }
    }
  },[visible])
  // 日期对应天数
  useEffect(() => {
    setDays(new Array(curDays).fill(1))
  }, [curDays])
  // 格式化选择日期
  useEffect(()=>{
    setNewDate(`${addZore(curSelectYear)}${joinStr}${addZore(curSelectMonth)}${joinStr}${addZore(curSelectDay)}`)
  }, [curSelectDay, curSelectMonth, curSelectYear])
  // 内容
  const content = (<div className={"date-content"}>
    <div className={"month-content"}>
      {
        months.map((month, mI)=>{
        return <div key={month} onClick={()=>clickMonth(mI+1)} className={
          classnames({
            "month-every": true,
            ['selected']: curSelectMonth === mI+1
          })
        }>{month}</div>
        })
      }
    </div>
    <div className={"day-content"}>
      <div className={"day-inner-content"}>
         {
           days.map((item, i)=>{
             return <div onClick={()=>clickDay(i+1)} className={
              classnames({
                ['selected']: curSelectDay === i+1,
                "day-every":true
              }) 
            } key={'day'+i}>{i+1}</div>
           })
         }
      </div>
    </div>
  </div>)
  // 标题
  const title = (<div>
    <div className={"header"}>
      <span onClick={()=>{}} className={"prev-btn"}></span>
      <ul>
        {
          years.map(year=>{
          return <li onClick={()=>clickYear(year)} className={
            classnames({
              ['selected']: curSelectYear === year
            })
          } key={year}>{year}</li>
          })
        }
      </ul>
      <span className={"next-btn"}></span>
      <div className={'header-btn'} onClick={()=>makeSure()}>确定</div>
    </div>
  </div>)
  return <div className={'nb-expire-date'}>
    <Popover  onVisibleChange={(visible)=>handleVisibleChange(visible)} visible={visible} trigger="click" autoAdjustOverflow={true} overlayClassName="nb-expire-date" title={title} content={content}>
      <Input value={newDate} placeholder="请选择" readOnly></Input>
    </Popover>
  </div>
}
