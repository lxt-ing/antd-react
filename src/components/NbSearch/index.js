import React from "react"
import { Input } from "antd"
import Icon from "../Icon"
import 'antd/lib/input/style';
export default function NbInput(props){
  const {placeholder='',prefix=(<Icon type="password" size={'32px'}></Icon>), ...rest} = props;
  return (
    <div className={"nb-search"}>
      <Input.Search prefix={prefix} allowClear={true} placeholder={placeholder ? placeholder : '请输入'} {...rest}></Input.Search>
    </div>
  )
}