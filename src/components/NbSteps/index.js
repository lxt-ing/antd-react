import React from "react"
import Style from './index.module.less'
import classnames from 'classnames'
import Icon from "../Icon"
export default function NbSteps(props) {
  const {
    current = 1,
    stepOptions = ['步骤一步骤一', '步骤二步骤一', '步骤三步骤一'],
  } = props
  
  return (
    <div className={classnames({
      [Style['nb-steps']]:true,
      [Style['hide-step']]:!stepOptions.length
    })}>
      {stepOptions.map((step, i) => {
        return (
          <div key={`steps-item-${i}`} className={
            classnames({
                [Style['current-step-item']]: i === current,
                [Style['actived-step-item']]: i < current && i >= 0,
                [Style['step-item']]: true
            })
          }>
            <div className={Style['step-line-wrapper']}>
              <div
                className={classnames({
                  [Style['step-item-line']]: true,
                  [Style['step-item-line-hidden']]: i === 0
                })}
              ></div>
              <div className={Style['step-item-circle']}
              >
                <div className={Style['step-item-icon']}>{step.icon ? step.icon : (i<current && i>=0 ? <Icon type="gouxuan" size={'24px'}/> :null)}</div>
              </div>
              <div
                className={classnames({
                  [Style['step-item-line']]: true,
                  [Style['step-item-line-hidden']]:
                    i === stepOptions.length - 1,
                })}
              ></div>
            </div>
            <div
              className={classnames({
                [Style['step-content-wrapper']]: true,
                [Style['step-center-content']]:
                  i !== 0 || i !== stepOptions.length - 1,
              })}
            >
              {step.title ? step.title : step}
            </div>
          </div>
        )
      })}
    </div>
  )
}
