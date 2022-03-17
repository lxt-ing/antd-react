import React from "react"
import { Checkbox } from "antd"
import classnames from "classnames"
export default function NbCheckbox(props){
  const {checked,indeterminate=false, ...rest} = props;
  return (
    <div className={
      classnames({
        "nb-checkbox":true
      })
    }>
      <Checkbox {...props}/>
    </div>
  )
}