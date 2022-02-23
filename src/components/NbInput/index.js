import React from "react"
import { Input } from "antd"
import 'antd/lib/input/style';
import classnames from "classnames"
export default function NbInput(props){
  const {size='', placeholder=''} = props;
  return (
    <div className={
      classnames({
        "nb-sm-input":size==='nb-small',
        "nb-lg-input":size==='nb-large'
      })
    }>
      <Input  placeholder={placeholder ? placeholder : '请输入'} {...props}>
      </Input>
    </div>
  )
}