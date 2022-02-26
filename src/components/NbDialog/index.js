import React from "react"
import { Modal } from 'antd';
import 'antd/lib/modal/style';
export default function NbModal(props){
  return (
    <Modal {...props}>
      { props.children }  
    </Modal>
  )
}