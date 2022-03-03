import React from "react"
import NbButton from "../NbButton"
export default function NbButtons(props){
  const {type='big', ...rest} = props;
  return (
    <NbButton type={type} {...rest}>{props.children}</NbButton>
  )
}