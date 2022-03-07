import React from 'react'
import { Select } from 'antd'
import 'antd/lib/select/style'
import Icon from "../Icon"
import classnames from 'classnames'
export default function NbSmallSelect(props) {
  const {
    lineHeight = 72,
    check = true,
    placeholder,
    optionslist = [],
    content,
    mode,
    options,
    dropdownStyle = { minWidth: 320 },
    ...rest
  } = props
  return (
    <div className="nb-small">
      <Select
      showArrow
      dropdownMatchSelectWidth={true}
      dropdownStyle={dropdownStyle}
      listHeight={lineHeight * 5}
      // className=""
      suffixIcon={<Icon type="xiangxia" size="32px"/>}
      placeholder={placeholder ? placeholder : '请选择'}
      size={'small'}
      {...rest}
      dropdownClassName={classnames({
        'not-check': !check && !props.mode,
        'nb-small': true,
        'check-select': check,
      })}
    >
      {optionslist.map((option, index) => (
        <Select.Option key={option.value}>
          <div
            className={classnames({
              'not-line-content': index === props.optionslist.length - 1,
              'line-content': index !== props.optionslist.length - 1,
            })}
          >
            {content ? content({ data: { index, ...option } }) : option.label}
          </div>
          {index !== props.optionslist.length - 1 ? (
            <div className="line"></div>
          ) : null}
        </Select.Option>
      ))}
    </Select>
    </div>
  )
}
