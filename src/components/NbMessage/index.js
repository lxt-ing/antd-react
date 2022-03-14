import React from "react"
import { message } from 'antd'
import Icon from '../Icon'
import 'antd/lib/message/style'
const Content = (props)=>{
  return (<span>{props.text}</span>)
}
const NbMessage = {
  success: props => {
    message.success({
      ...props,
      className:'nb-success-message',
      content: <Content text={props.content}/>,
      icon: <Icon type="gouxuan" color={"#00A572"} size="56px" />
    })
  },
  error: props => {
    message.error({
      ...props,
      className:'nb-error-message',
      content: <Content text={props.content}/>,
      icon: <Icon type="fox" color={"#E52D3E"} size="56px" />
    })
  },
  warn: props => {
    message.warning({
      ...props,
      className:'nb-warning-message',
      content: <Content text={props.content}/>,
      icon: <Icon type="gouxuan" color={"#F98900"} size="56px" />
    })
  }
}

export default NbMessage
