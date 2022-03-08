import React from 'react'
import { Modal } from 'antd'
import 'antd/lib/modal/style'
import classnames from 'classnames'
import style from './index.module.less'
export default function NbModal(props) {
  const {
    title,
    singleBtn = false,
    closable = singleBtn ? false : true,
    maskClosable = true,
    confirmStyle = {
      background: 'linear-gradient(180deg, #3385E6 0%, #0066E0 100%)',
      color: '#fff',
    },
    onOk = null,
    cancelText = '取消',
    okText = '确定',
    bodyStyle = {height: '520px' },
    width = '720px',
    ...rest
  } = props
  return (
    <Modal
      closable={closable}
      maskClosable={maskClosable}
      width={width}
      bodyStyle={bodyStyle}
      okText={okText}
      cancelText={cancelText}
      footer={null}
      {...rest}
      className={'nb-confirm-dialog'}
    >
      <div
        className={classnames({
          [style['nb-confirm-content-wrapper']]: true,
        })}
      >
        {/* 弹窗标题及内容部分  */}
        {props.children}
      </div>
      <div className={style['nb-confirm-footer']}>
        {/* 底部优先级 footerDom > singleBtn > 默认 */}
        {props.footerDom ? (
          <>
            {props.footerDom}
          </>
        ) : (
          <>
            {singleBtn ? (
              <>
                <div
                  className={classnames({
                    [style.options]: true,
                    [style['single-btn']]: singleBtn,
                  })}
                  onClick={() =>
                    onOk && typeof onOk === 'function' && onOk && onOk()
                  }
                >
                  {okText}
                </div>
              </>
            ) : (
              <>
                <div
                  className={style.options}
                  onClick={() =>
                    props.onCancel &&
                    typeof props.onCancel === 'function' &&
                    props.onCancel()
                  }
                >
                  {cancelText}
                </div>
                <div
                  className={style.options}
                  style={confirmStyle}
                  onClick={() =>
                    onOk && typeof onOk === 'function' && onOk && onOk()
                  }
                >
                  {okText}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Modal>
  )
}
