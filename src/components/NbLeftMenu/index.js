import React from "react"
import { Menu } from "antd"
import 'antd/lib/menu/style';
export default function NbMenu(props){
  const {selectable=true,menuList=[],content=null,...rest } = props;
  return (
    <Menu {...rest} selectable={selectable}>
      {
        menuList.map((menu, index)=>(
          <Menu.Item key={menu}>
            {content ? content({ data: { index, ...menu } }) : props.children}
            { index !== menuList.length - 1 ? <div className="line"></div> : null}
          </Menu.Item>
        ))
      }
    </Menu>
  )
}