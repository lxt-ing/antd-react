import React from "react"
import { Radio } from "antd"
import classnames from "classnames"
export default function NbRadio(props){
  return (
    <div className={
      classnames({
        "nb-radio-group":true
      })
    }>
      <Radio.Group {...props}></Radio.Group>
    </div>
  )
}