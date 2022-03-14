import React from 'react'
import { Progress } from 'antd'
import 'antd/lib/progress/style'
import classnames from 'classnames'
import Style from "./index.module.less"
export default function NbProgress(props){
  const {strokeWidth=props.type === 'circle' ? 10 : 20, width=271, trailColor='#D6E7FB',strokeColor='#0066E0',...rest }=props
  return (
    <div className={
      classnames({
        [Style[`nb-${props.type}-progress`]]:true,
        [`nb-${props.type}-progress`]:true
      })
    }>
      <Progress {...rest} strokeWidth={strokeWidth} width={width} trailColor={trailColor} strokeColor={strokeColor}></Progress>
    </div>
  )
}