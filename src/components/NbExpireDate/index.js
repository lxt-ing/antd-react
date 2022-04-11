import React,{useState, useEffect} from 'react'
import "./index.less"
import {Popover, Input} from "antd"
import "antd/lib/popover/style"
import dayjs from "dayjs"
import classnames from "classnames"
export default function NbExpireDate(props) {
  const {date,joinStr="-",yearCount=7, onChange=(value)=>{console.log(value);}} = props;
  let count = yearCount;
  if(isNaN(yearCount)){
    count = 7;
  }
  let selectYear,selectMonth,selectDay, curYear, years, slideDom, realYear = dayjs(new Date()).year();
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
  const [translateNum, setTranslateNum] = useState(0)
  curYear = dayjs().year();
  years = [];
  const months = ['1月','2月','3月','4月','5月','6月','7月', '8月','9月','10月','11月','12月']
  for(let i = 0; i<count; i++){
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
    // 选中的年份往前滚动
    console.log(realYear, '当前年份');
    let diff = year - realYear
    if(diff>0){
      if(diff < count-5){
        setTranslateNum(diff)
      }else{
        setTranslateNum(count-5)
      }
    }
    // 更新年月日
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
  // 显示切换
  function handleVisibleChange(value){
    setVisible(value)
  }
  // 上一个
  function prev(){
    if(translateNum === 0)return;
    setTranslateNum(translateNum-1)
  }
  // 下一个
  function next(){
    if(translateNum >= (count - 5))return;
    setTranslateNum(translateNum+1)
  }
  // 滚动
  useEffect(()=>{
    if(slideDom){
      slideDom.style.transform = `translateX(-${translateNum * 104}px)`
    }
  }, [translateNum])
  // 显示隐藏，隐藏判断是否更新日期
  useEffect(()=>{
    if(visible){
      // 每次打开滚动到最前面，知道不能再滚动为止
      setCoverDate(false)
      let diff = curSelectYear - realYear
      if(diff>0){
        if(diff < count-5){
          setTranslateNum(diff)
        }else{
          setTranslateNum(count-5)
        }
      }
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
      <span onClick={()=>{prev()}} className={"prev-btn"}></span>
      <div className={"header-ul"}>
        <ul style={{
          width: `${(count-1)*104+96}px`
        }} ref={(ref)=>slideDom = ref}>
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
      </div>
      <span onClick={()=>next()} className={"next-btn"}></span>
      <div className={'header-btn'} onClick={()=>makeSure()}>确定</div>
    </div>
  </div>)
  return <div className={'nb-expire-date'}>
    <Popover  onVisibleChange={(visible)=>handleVisibleChange(visible)} visible={visible} trigger="click" autoAdjustOverflow={true} overlayClassName="nb-expire-date" title={title} content={content}>
      <Input value={newDate} placeholder="请选择" readOnly></Input>
    </Popover>
  </div>
}
