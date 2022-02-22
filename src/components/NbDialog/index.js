import React from "react"
import { Modal } from 'antd';
import 'antd/lib/modal/style';
console.log(Modal.info)
// const NbModal = React.forwardRef((props,ref)=>(
//   <Modal {...props}>
//     { props.children }  
//   </Modal>
// ))
export default function NbModal(props){
  return (
    <Modal {...props}>
      { props.children }  
    </Modal>
  )
}