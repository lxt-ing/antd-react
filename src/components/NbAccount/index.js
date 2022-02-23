import React from 'react'
import { Input } from 'antd'
import 'antd/lib/input/style'
import classnames from 'classnames'
import Icon from "../Icon"
export default function NbInput(props) {
  const { size = '', placeholder } = props
  return (
    <div
      className={classnames({
        'nb-account-input':true,
        'nb-sm-input': size === 'nb-small',
        'nb-lg-input': size === 'nb-large',
      })}
    >
      <Input
        prefix={<Icon type="password"></Icon>}
        placeholder={placeholder ? placeholder : '请输入'}
        {...props}
      >
      </Input>
    </div>
  )
}
