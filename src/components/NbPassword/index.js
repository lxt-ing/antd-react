import React,{useState} from 'react'
import { Input } from 'antd'
import 'antd/lib/input/style'
import classnames from 'classnames'
import Icon from "../Icon"
// import IconFont from "../CreateIcon"
export default function NbPassword(props) {
  const { size = 'large', placeholder, color='#CAD0E0' } = props
  return (
    <div
      className={classnames({
        "nb-password-input":true,
        'nb-sm-input': size === 'small',
        'nb-lg-input': size === 'large',
      })}
    >
      <Input.Password allowClear
        prefix={<Icon color={color} type="password"></Icon>}
        placeholder={placeholder ? placeholder : '请输入'}
        iconRender={visible => (visible ? <Icon color={color} type="dakaiyanjing"/> : <Icon color={color} type="guanbiyanjing"/>)}
        {...props}
      >
      </Input.Password>
    </div>
  )
}
