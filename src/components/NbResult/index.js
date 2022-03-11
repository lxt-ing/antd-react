import React,{useEffect} from 'react'
import { Modal } from 'antd'
import 'antd/lib/modal/style'
import classnames from 'classnames'
import loading from "../images/loading.gif"
import style from './index.module.less'
const ResultImg = (props) => {
  return <img style={props.IconStyle} src={require(`../images/${props.type}.png`)} />
}
const LoadingText = (props) => {
  return (
    <div className={'loading-text'}>加载中...</div>
  )
}
const NbResult = (props)=>{
  useEffect(() => {
    return () => {
      clearTimeout(NbResult.timeId)
    }
  },[])
  const {type="success",maskClosable=true,mask=false, bodyStyle={height:'520px'},width="720px", ...rest} = props;
  return (
    <Modal closable={false} mask={mask} maskClosable={maskClosable} width={width} bodyStyle={bodyStyle} footer={null} {...rest} className={"nb-result-dialog"}>
      <div className={
        classnames({
          [style['nb-result-content']]:true
        })
      }>
        <ResultImg type={type}/>
        {props.children}
      </div>
    </Modal>
  )
}
NbResult.defaultProps = {
  footer: null,
  className: 'nb-result-dialog',
  closable:false,
  bodyStyle:{height:'520px'},
  width:"720px"
}
const types = ['success', 'error', 'warn'];
types.forEach(type=>{
  NbResult[type]= (props={}) => {
    NbResult.timeId = null;
    const { maskClosable=false,mask=false, ...rest} = props;
    const modal = Modal.error({
      mask, 
      maskClosable, 
      ...NbResult.defaultProps,
      content: rest.content,
      icon:<ResultImg IconStyle={{ width:"240px",
       height:"240px",margin:'60px 0 49px 0'}
      } type={type}/>,
      ...rest
    })
    if(props.delayClosed){
      clearTimeout(NbResult.timeId);
      NbResult.timeId = setTimeout(()=>{
        modal.destroy();
      }, props.delayClosed)
    }
  }
})
NbResult['loading'] = (props={}) => {
  NbResult.timeId = null;
  const { maskClosable=false,mask=false, ...rest} = props;
  const modal = Modal.error({
    mask, 
    maskClosable, 
    ...NbResult.defaultProps,
    content: rest.content || <LoadingText />,
    className:'nb-loading-dialog',
    width:props.width || '320px',
    bodyStyle:{height:'360px'},
    icon:props.icon ? props.icon : <img style={props.IconStyle} src={loading} />,
    ...rest
  })
  return modal
}
export default NbResult
