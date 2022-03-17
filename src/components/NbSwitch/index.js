import React from "react"
import { Switch  } from "antd"
import 'antd/lib/switch/style'
export default function NbSwitch(props){
  return (
    <div className={'nb-switch'}>
      <Switch {...props} />
    </div>
  )
}