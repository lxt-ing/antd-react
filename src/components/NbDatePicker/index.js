import React from "react"
import { DatePicker } from "antd"
import 'antd/lib/date-picker/style';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import classnames from "classnames"
export default function NbDatePicker(props){
  return (
    <DatePicker className={"nb-date-picker"} locale={locale} {...props}></DatePicker>
  )
}