import React from "react"
import { Select } from "antd"
import 'antd/lib/select/style';
import classnames from "classnames"
import Icon from "../Icon"
import {CaretDownOutlined} from "@ant-design/icons"
export default function NbSelectCom(props){
  // TODO:超过一行的选项没有处理
  const {lineHeight=63, check=true,placeholder, optionslist=[],content,size="middle", ...rest} = props;
  return (
      <Select showArrow {...rest} dropdownMatchSelectWidth={true} listHeight={lineHeight * 5} className={`nb-${size}`} suffixIcon={<CaretDownOutlined className="ant-select-suffix"/>} placeholder={placeholder ? placeholder : '请选择'} size={size} dropdownClassName={
        classnames({
          "not-check":!check && !props.mode,
          [`nb-${size}`]:true,
          "check-select":check
        })
      } removeIcon={
        <Icon size="21px" type="guanbi" color="#8B8EA0"></Icon>
      }>
        {
          optionslist.map((option, index)=>(
          <Select.Option key={option.value}>
            <div className={
              classnames({
                "not-line-content":index === props.optionslist.length-1,
                "line-content":index !== props.optionslist.length - 1
              })
            }>
              {content ? content({name:option.value}) : option.label}
            </div>
            { index !== props.optionslist.length - 1 ? <div className="line"></div> : null}
          </Select.Option>
          ))
        }
      </Select>
    )
}