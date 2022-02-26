import React from "react"
import classnames from "classnames"
import NbButton from "../NbButton"
export default function NbButtons(props){
  const {sence='big', ...rest} = props;
  return (
    <NbButton sence={sence} {...rest}>{props.children}</NbButton>
  )
}