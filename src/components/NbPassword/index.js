import React,{useState, useRef, useEffect} from 'react'
import { Input } from 'antd'
import 'antd/lib/input/style'
import classnames from 'classnames'
import Icon from "../Icon"
export default function NbPassword(props) {
  const inputRef = useRef(null)
  const { size = 'large',defaultValue="213", placeholder, color='#CAD0E0', ...rest } = props;
  const [type, setType] = useState('password')
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    // 图标切换后将光标聚焦在结尾
    inputRef?.current?.focus({
      cursor: 'end'
    });
  },[visible])
  const toggleVisible = ()=>{
    // 切换图标
    setVisible(!visible)
    setType(type==='password' ? 'text':'password')
  }
  return (
    <div
      className={classnames({
        "nb-password-input":true,
        'nb-sm-input': size === 'small',
        'nb-lg-input': size === 'large',
      })}
    >
      <Input defaultValue={defaultValue} ref={inputRef} type={type} 
      prefix={<Icon color={color} type="password"></Icon>} allowClear={true} {...rest}></Input>
      <div className={"nb-password-icon"} onClick={()=>{toggleVisible()}}>
        <Icon type={ visible ? 'dakaiyanjing' : 'guanbiyanjing'}></Icon>
      </div>
    </div>
  )
}
