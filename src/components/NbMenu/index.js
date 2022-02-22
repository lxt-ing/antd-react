import React from "react"
import { Menu } from "antd"
import 'antd/lib/menu/style';
export default function NbMenu(props){
  return (
    <Menu selectable={props.selectable}>
      {
        props.menuList.map((menu, index)=>(
          <Menu.Item key={menu}>
            {props.children}
            { index !== props.menuList.length - 1 ? <div className="line"></div> : null}
          </Menu.Item>
        ))
      }
    </Menu>
  )
}