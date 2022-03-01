import React from "react"
import { Modal } from 'antd';
import 'antd/lib/modal/style';
import classnames from "classnames"
import style from "./index.module.less";
export default function NbModal(props){
  const {maskClosable=true, confirmStyle={background:'linear-gradient(180deg, #3385E6 0%, #0066E0 100%)', color:'#fff'},onOk=null, cancelText='取消',okText="确定",bodyStyle={width:'720px', height:'520px', padding:"100px 0"},width="720px", ...rest} = props;
  return (
    <Modal maskClosable={maskClosable} width={width} bodyStyle={bodyStyle} okText={okText} cancelText={cancelText} footer={null} {...rest} className={"nb-confirm-dialog"}>
      <div className={
        classnames({
          [style['nb-confirm-content']]:true
        })
      }>
        { props.children }
      </div>
      
      <div className={style['nb-confirm-footer']}>
        <div className={style.options} onClick={()=>props.onCancel && typeof props.onCancel === 'function' && props.onCancel()}>{cancelText}</div>
        <div className={style.options} style={confirmStyle} onClick={()=>onOk && typeof onOk === 'function'  && onOk && onOk()}>{okText}</div>
      </div>  
    </Modal>
  )
}