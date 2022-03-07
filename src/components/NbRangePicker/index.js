import React from 'react'
import Icon from '../Icon'
import dayjs from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/lib/date-picker/style'
const DatePicker = generatePicker(dayjsGenerateConfig)
export default function NbRangePicker(props) {
  const {
    clearRanges=()=>console.log('请传入清除日期的方法'),
    ranges={
      "近一周":[dayjs().subtract(7, 'day'), dayjs()],
      "近一月":[dayjs().subtract(30, 'day'), dayjs()],
      "近三月":[dayjs().subtract(90, 'day'), dayjs()],
    },
    showToday=false,
    dropdownClassName = 'nb-range-picker-dropdown',
    className = 'nb-range-picker',
    format = 'YYYY/MM/DD',
    ...rest
  } = props
  const SingleLeft = ()=>{
    return (
      <>
        <Icon type="Right" size="32px" />
      </>
    )
  }
  const DoubleLeft = ()=>{
    return (
      <>
        <Icon type="Right" size="32px" />
        <Icon type="Right" size="32px" />
      </>
    )
  }
  const clearRange = ()=><div onClick={()=>{
    clearRanges();
  }} className={"footer-clear-ranges"}>清空</div>
  return (
    <DatePicker.RangePicker
      renderExtraFooter={
        clearRange
      }
      ranges={ranges}
      separator={'一'}
      showToday={showToday}
      superNextIcon={<DoubleLeft/>}
      superPrevIcon={<DoubleLeft/>}
      nextIcon={<SingleLeft />}
      prevIcon={<SingleLeft />}
      dropdownClassName={dropdownClassName}
      format={format}
      className={className}
      suffixIcon={<Icon type="rrili" size="32px" />}
      {...rest}
    ></DatePicker.RangePicker>
  )
}
