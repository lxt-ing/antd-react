import React from "react"
import { Select } from "antd"
import 'antd/lib/select/style';
export default function NbSelect(props){
  return (
    <Select {...props}>
      {props.children}
    </Select>
  )
}