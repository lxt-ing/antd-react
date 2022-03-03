import React from "react"
import classnames from "classnames"
import Style from "./index.module.less"
import Icon from "../Icon"
export default function NbButton(props){
  // 传参：场景类型-按钮类型
  // 场景类型字段：big main icon text icontext
  // 按钮类型: default primary danger minor(次要) disabled
  const {type="main", icon=false, style={},...rest} = props;
  const [senceType, senceText='default'] = type.split('-')
  return (
    <button style={style} {...rest} className={
      classnames({
        [Style['nb-button']]:true,
        [Style[`nb-${senceType}-button`]]:true,
        [Style[`nb-${senceType}-${senceText}-button`]]:true
      })
    }>
      {icon ? <div className={Style['nb-icon']}><Icon type={icon} size={'28px'}></Icon></div> : null}
      {props.children}
    </button>
  )
}