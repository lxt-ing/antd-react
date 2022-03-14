// import React from "react"
// import { Dropdown } from "antd"
// import 'antd/lib/menu/style';
// import 'antd/lib/dropdown/style';
// import NbMenu from "../NbMenu"

// export default function NbDropdown(props){
//   const {trigger=['click'], arrow=true, ...rest} = props;
//     return (
//       <Dropdown {...rest} overlayClassName="nb-dropdown" overlay={props.DropdownMenu} arrow={arrow} trigger={trigger}>
//         {props.DropdownTitle}
//       </Dropdown>
//     )
//   }

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