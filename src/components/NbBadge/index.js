import React from "react"
import { Badge } from "antd"
import 'antd/lib/badge/style';
export default function NbBadge(props){
  const {overflowCount=999, ...rest} = props;
  return (
    <div className={'nb-badge'}>
      <Badge overflowCount={overflowCount} {...rest}></Badge>
    </div>
  )
}