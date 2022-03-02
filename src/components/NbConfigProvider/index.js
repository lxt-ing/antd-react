import React from "react"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from "antd"
export default function NbConfigProvider(props){
  return (
    <ConfigProvider locale={locale} {...props}>
      {props.children}
    </ConfigProvider>
  )
}