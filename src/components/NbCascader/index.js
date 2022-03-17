import React from "react"
import { Cascader } from "antd"
import 'antd/lib/cascader/style'
import Icon from '../Icon'
// import {CaretDownOutlined} from "@ant-design/icons"

export default function NbBadge(props){
  const {placeholder="请选择",allowClear=false,suffixIcon=(<Icon type="xiangxia" size="32px"/>),...rest} = props; 
  return (
    <div className={'nb-cascader'}>
      <Cascader dropdownClassName={"nb-cascader-dropdown"} suffixIcon={suffixIcon} allowClear={allowClear} placeholder={placeholder} {...rest}></Cascader>
    </div>
  )
}