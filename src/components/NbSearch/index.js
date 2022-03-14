import React from "react"
import { Input } from "antd"
import Icon from "../Icon"
import 'antd/lib/input/style';
export default function NbInput(props){
  // TODO:查看prefix如何添加点击搜索的功能
  const {placeholder='请输入',prefix=(<Icon color={'#8B8EA0'} type="sousuo" size={'32px'}></Icon>), ...rest} = props;
  return (
    <div className={"nb-search"}>
      <Input.Search prefix={prefix} allowClear={true} placeholder={placeholder} {...rest}></Input.Search>
    </div>
  )
}