import React from 'react'
import { Progress } from 'antd'
import 'antd/lib/progress/style'
import classnames from 'classnames'
import Style from "./index.module.less"
export default function NbProgress(props){
  return (
    <div className={
      classnames({
        [Style[`nb-${props.type}-progress`]]:true,
        [`nb-${props.type}-progress`]:true
      })
    }>
      <Progress {...props} strokeWidth={props.type === 'circle' ? 10 : 20} width={271} trailColor={'#D6E7FB'} strokeColor={'#0066E0'}></Progress>
    </div>
  )
}