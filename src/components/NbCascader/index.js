import React from "react"
import { Cascader } from "antd"
import 'antd/lib/cascader/style'
import classnames from "classnames"
import {CaretDownOutlined} from "@ant-design/icons"

export default function NbBadge(props){
  const {placeholder="请选择",allowClear=false,suffixIcon=(<CaretDownOutlined className="ant-select-suffix"/>),...rest} = props; 
  return (
    <div className={'nb-cascader'}>
      <Cascader dropdownClassName={"nb-cascader-dropdown"} suffixIcon={suffixIcon} allowClear={allowClear} placeholder={placeholder} {...rest}></Cascader>
    </div>
  )
}