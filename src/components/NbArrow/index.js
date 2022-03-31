import Style from "./index.module.less"
import React from "react"
import classnames from "classnames"
export default function NbArrow(props){
  const {open=false} = props
  return (
    <button className={
      classnames({
        [Style['nb-arrow']]:true,
        [Style['nb-arrow-opened']]:open
      })
    }></button>
  )
}