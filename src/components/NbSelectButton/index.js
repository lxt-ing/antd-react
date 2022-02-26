import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Style from './index.module.less'
import { Checkbox } from 'antd'
export default function NbSelectButton(props) {
  const { multiple = false, options = [], ...rest } = props
  console.log(multiple);
  const [checkedArr, setCheckedArr] = useState(props.checked.slice())
  return (
    <div className={Style['nb-select-button-wrapper']}>
      {multiple ? (
        <>
          <Checkbox.Group className={Style['multi-checkboxes']}>
            {options.map((option, i) => {
              return (
                <div
                  key={`nb-${multiple}-button-${i}`}
                  className={Style['nb-multi-button-wrapper']}
                >
                  <Checkbox
                    {...rest}
                    onClick={() => {
                      props.onClick(i)
                      const state = checkedArr.slice()
                      state[i] = !checkedArr[i]
                      setCheckedArr(state)
                    }}
                    className={Style['single-checkbox']}
                    value={option.value ? option.value : option}
                  >
                    {option.label ? option.label : option}
                  </Checkbox>
                  <div
                    className={classnames({
                      [Style[`nb-select-button`]]: true,
                      [Style[`nb-checked-button`]]: checkedArr[i],
                      [Style[`nb-multi-button`]]: multiple,
                    })}
                  >
                    {props.children}
                  </div>
                </div>
              )
            })}
          </Checkbox.Group>
        </>
      ) : (
        <>
          <div
            className={classnames({
              [Style[`nb-select-button`]]: true,
              [Style[`nb-checked-button`]]: props.checked,
              [Style[`nb-multi-button`]]: multiple,
            })}
          >
            {props.children}
          </div>
          <Checkbox className={Style['single-checkbox']} {...props}></Checkbox>
        </>
      )}
    </div>
  )
}
