import React from "react"
import { Dropdown } from "antd"
import 'antd/lib/menu/style';
import 'antd/lib/dropdown/style';
// import "./AntdSelect.less";
export default function NbDropdown(props){
    return (
      <Dropdown overlayClassName="nb-dropdown" overlay={props.DropdownMenu} {...props}>
        {props.DropdownTitle}
      </Dropdown>
    )
  }