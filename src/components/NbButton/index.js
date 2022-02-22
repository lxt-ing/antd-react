import React from "react"
import {Button} from "antd"
import 'antd/lib/button/style';
export default function NbButton(props){
  return (
    <Button {...props}>{props.children}</Button>
  )
}