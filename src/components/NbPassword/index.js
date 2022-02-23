import React,{useState} from 'react'
import { Input } from 'antd'
import 'antd/lib/input/style'
import classnames from 'classnames'
import Icon from "../Icon"
import IconFont from "../CreateIcon"
export default function NbPassword(props) {
  const { size = '', placeholder, color='#CAD0E0' } = props
  return (
    <div
      className={classnames({
        "nb-password-input":true,
        'nb-sm-input': size === 'nb-small',
        'nb-lg-input': size === 'nb-large',
      })}
    >
      <Input.Password allowClear
        prefix={<Icon color={color} type="password"></Icon>}
        placeholder={placeholder ? placeholder : '请输入'}
        iconRender={visible => (visible ? <IconFont style={{color:color}} type="icon-dakaiyanjing"/> : <IconFont style={{color:color}} type="icon-guanbiyanjing"/>)}
        {...props}
      >
      </Input.Password>
    </div>
  )
}
