import React from "react"
import { Pagination  } from "antd"
import 'antd/lib/pagination/style';
//  https://juejin.cn/post/6844904080159014919 参考资料
export default function NbPages(props){
  return (
    <Pagination className={'nb-pages'} {...props}></Pagination>
  )
}