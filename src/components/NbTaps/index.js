import React from "react"
import Style from './index.module.less'
import classnames from "classnames"
export default function NbTaps(props){
  const {options=['菜单一','菜单二','菜单三'], selectIndex=0, onChange, type="page"} = props;
  return (
    <div className={
      classnames({
        [Style['tabs-wrapper']]:true,
        [Style['page-tabs']]:type === 'page',
        [Style['first-tab']]:selectIndex === 0,
        [Style['last-tab']]:selectIndex === options.length - 1,
      })
    }>
      {
        options.map((item, index)=>{
          return (
            <div onClick={
                ()=>{onChange(index)}
            } key={'tab'+item+'-'+index} className={
              classnames({
                [Style['tab-item']]:true,
                [Style['tab-selected']]:selectIndex === index
              })
            }>
            {type==='page' ? <>
            <div 
              className={
                classnames({
                [Style['tab-content']]:true,
                [Style['first-tab']]:selectIndex === 0,
                [Style['last-tab']]:selectIndex === options.length-1,
              })
            }>{item}</div>{selectIndex === index ? null : <><div className={Style['page-tab-line']}></div></>}</>:<>{item}</>}
            </div>
          )
        })
      }
    </div>
  )
}