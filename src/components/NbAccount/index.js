import React from 'react'
import { Input } from 'antd'
import 'antd/lib/input/style'
import classnames from 'classnames'
import Icon from "../Icon"
export default function NbInput(props) {
  const { size = 'large', placeholder, allowClear="true", ...rest } = props
  return (
    <div
      className={classnames({
        'nb-account-input':true,
        'nb-sm-input': size === 'small',
        'nb-lg-input': size === 'large',
      })}
    >
      <Input
        prefix={<Icon type="password"></Icon>}
        placeholder={placeholder ? placeholder : '请输入'}
        allowClear={allowClear}
        {...rest}
      >
      </Input>
    </div>
  )
}
