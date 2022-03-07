import React from 'react'
import Icon from '../Icon'
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/lib/date-picker/style'
const DatePicker = generatePicker(dayjsGenerateConfig)
export default function NbDatePicker(props) {
  const {
    showToday=false,
    dropdownClassName = 'nb-date-picker-dropdown',
    className = 'nb-date-picker',
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
  return (
    <DatePicker
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
    ></DatePicker>
  )
}
