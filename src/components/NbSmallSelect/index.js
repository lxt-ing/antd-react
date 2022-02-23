import React from "react"
import { Select } from "antd"
import 'antd/lib/select/style';
import classnames from "classnames"
import {CaretDownOutlined} from "@ant-design/icons"
export default function NbSmallSelect(props){
  const {lineHeight=63, check=true,placeholder, optionslist=[],content,mode, ...rest} = props;
  return (
      <Select showArrow {...rest} dropdownMatchSelectWidth={true} listHeight={lineHeight * 5} className="nb-small" dropdownClassName={
        classnames({
          "not-check":!check && !props.mode,
          "nb-small":true,
          "check-select":check
        })
      } suffixIcon={<CaretDownOutlined className="ant-select-suffix"/>} placeholder={placeholder ? placeholder : '请选择'} size={'small'}>
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