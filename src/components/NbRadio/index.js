import React from "react"
import { Radio } from "antd"
import classnames from "classnames"
export default function NbRadio(props){
  const {checked, ...rest} = props;
  return (
    <div className={
      classnames({
        "nb-radio":true,
        "nb-checked-radio":checked
      })
    }>
      <Radio {...rest}/>
    </div>
  )
}