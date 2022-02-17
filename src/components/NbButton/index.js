import React from "react"
import {Button} from "antd"
export default function test(props){
  console.log(props);
  return (
    <Button {...props}>{props.children}</Button>
  )
}