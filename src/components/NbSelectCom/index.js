import React from 'react'
import { Select } from 'antd'
import 'antd/lib/select/style'
import classnames from 'classnames'
import Icon from '../Icon'
export default function NbSelectCom(props) {
  const {
    maxShowDropdonwCount = 5,
    lineHeight = props.size === 'large' ? 80 : (props.size === 'middle' ? 64 : 54),
    maxTagCount = 1,
    check = true,
    placeholder,
    optionslist = [],
    content,
    size = 'middle',
    dropdownStyle = props.size === 'small' ? { minWidth: 320 } : null,
    ...rest
  } = props
  return (
    <div className={`nb-${size}`}>
      <Select
      maxTagCount={maxTagCount}
      maxTagPlaceholder={'...'}
      showArrow
      {...rest}
      dropdownMatchSelectWidth={true}
      dropdownStyle={dropdownStyle}
      listHeight={lineHeight * maxShowDropdonwCount}
      suffixIcon={<Icon type="xiangxia" size="32px"/>}
      placeholder={placeholder ? placeholder : '请选择'}
      size={size}
      dropdownClassName={classnames({
        'not-check': !check && !props.mode,
        [`nb-${size}`]: true,
        'check-select': check,
      })}
      removeIcon={<Icon size="24px" type="fox" color="#8B8EA0"></Icon>}
    >
      {optionslist.map((option, index) => (
        <Select.Option className={'nb-select-option'} key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  </div>  
  )
}
