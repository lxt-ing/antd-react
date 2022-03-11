import React, { useState } from 'react'
import classnames from 'classnames'
import Style from './index.module.less'
import { Checkbox } from 'antd'
export default function NbSelectButton(props) {
  let { multiple = false, options = ['选项一'],checked=false, onChange=()=>{}, ...rest } = props
  // console.log(checked);
  // const isArray = Object.prototype.toString.call(checked) === '[object Array]';
  // if(isArray){
  //   multiple = true;
  // }
  const [checkedArr, setCheckedArr] = useState(checked.slice())
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
                      const state = checkedArr.slice()
                      state[i] = !checkedArr[i]
                      setCheckedArr(state)
                      onChange(i, state)
                    }}
                    className={Style['single-checkbox']}
                    value={option.value ? option.value : option}
                  >
                  </Checkbox>
                  <div
                    className={classnames({
                      [Style[`nb-select-button`]]: true,
                      [Style[`nb-checked-button`]]: checkedArr[i],
                      [Style[`nb-multi-button`]]: multiple,
                    })}
                  >
                    {option.label ? option.label : option}
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
              [Style[`nb-checked-button`]]: checked,
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
