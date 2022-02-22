import React from "react"
import { Select } from "antd"
import 'antd/lib/select/style';
import classnames from "classnames"
import {CaretDownOutlined} from "@ant-design/icons"
export default function NblargeSelect(props){
  const {lineHeight=63, check=true,placeholder, optionslist=[],content, ...rest} = props;
  return (
      <Select {...rest} dropdownMatchSelectWidth={true} listHeight={lineHeight * 5} className="nb-large" dropdownClassName={
        classnames({
          "nb-large":true,
          "check-select":check
        })
      } suffixIcon={<CaretDownOutlined />} placeholder={placeholder ? placeholder : '请选择'} size={'large'}>
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