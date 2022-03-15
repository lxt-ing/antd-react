import React from "react"
import { Input } from "antd"
import Icon from "../Icon"
import 'antd/lib/input/style';
export default function NbInput(props){
  const {placeholder='请输入',prefix=(<Icon color={'#8B8EA0'} type="sousuo" size={'32px'}></Icon>), ...rest} = props;
  return (
    <div className={"nb-search"}>
      {/* <div className={'nb-search-sousuo'}><Icon color={'#8B8EA0'} type="sousuo" size={'32px'}></Icon></div> */}
      <Input.Search enterButton={<Icon color={'#8B8EA0'} type="sousuo" size={'32px'}></Icon>} allowClear={true} placeholder={placeholder} {...rest}></Input.Search>
    </div>
  )
}