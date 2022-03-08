import React,{useEffect} from 'react'
import { Modal } from 'antd'
import 'antd/lib/modal/style'
import classnames from 'classnames'
import warn from '../images/warn.png'
import success from '../images/success.png'
import error from '../images/error.png'
import alarm from '../images/alarm.png'
import style from './index.module.less'
const ResultImg = (props) => {
  return <img style={props.IconStyle} src={require(`../images/${props.type}.png`)} />
}
// const SuccessImg = () => {
//   return <img src={success} />
// }
// const WarnImg = () => {
//   return <img src={warn} />
// }
// const ErrorImg = () => {
//   return <img src={error} />
// }
// const AlarmImg = () => {
//   return <img src={alarm} />
// }
const NbResult = (props)=>{
  useEffect(() => {
    return () => {
      console.log('关闭');
      clearTimeout(NbResult.timeId)
    }
  },[])
  const {type="success",maskClosable=true,mask=false, bodyStyle={width:'720px', height:'520px'},width="720px", ...rest} = props;
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
  bodyStyle:{width:'720px', height:'520px'},
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
// NbResult.success = (props={}) => {
//   NbResult.timeId = null;
//   const { maskClosable=false,mask=false, ...rest} = props;
//   const modal = Modal.error({
//     mask, 
//     maskClosable, 
//     ...NbResult.defaultProps,
//     content: rest.content,
//     icon:<ResultImg IconStyle={{ width:"240px",
//      height:"240px",margin:'60px 0 49px 0'}
//     } type="success"/>,
//     ...rest
//   })
//   if(props.delayClosed){
//     clearTimeout(NbResult.timeId);
//     NbResult.timeId = setTimeout(()=>{
//       modal.destroy();
//     }, props.delayClosed)
//   }
// }
// NbResult.error = (props={}) => {
//   NbResult.timeId = null;
//   const { maskClosable=false,mask=false, ...rest} = props;
//   const modal = Modal.error({
//     mask, 
//     maskClosable, 
//     ...NbResult.defaultProps,
//     content: rest.content,
//     icon:<ResultImg IconStyle={{ width:"240px",
//      height:"240px",margin:'60px 0 49px 0'}
//     } type="success"/>,
//     ...rest
//   })
//   if(props.delayClosed){
//     clearTimeout(NbResult.timeId);
//     NbResult.timeId = setTimeout(()=>{
//       modal.destroy();
//     }, props.delayClosed)
//   }
// }


// const NbResult = {
//   defaultProps: {
//     footer: null,
//     className: 'nb-result-dialog',
//     closable:false,
//     bodyStyle:{width:'720px', height:'520px'},
//     width:"720px"
//   },
//   success: (props={}) => {
//     let timeId = null;
//     const { maskClosable=false,mask=false, ...rest} = props;
//     const modal = Modal.error({
//       mask, 
//       maskClosable, 
//       ...NbResult.defaultProps,
//       content: rest.content,
//       icon:<ResultImg IconStyle={{ width:"240px",
//        height:"240px",margin:'60px 0 49px 0'}
//       } type="success"/>,
//       ...rest
//     })
//     if(props.delayClosed){
//       clearTimeout(timeId);
//       timeId = setTimeout(()=>{
//         modal.destroy();
//       }, props.delayClosed)
//     }
//   },
//   // error: props => {
//   //   Modal.error({
//   //     ...props,
//   //     className:'nb-error-message',
//   //     content: <Content text={props.content}/>,
//   //     icon: <Icon type="fox" color={"#E52D3E"} size="56px" />
//   //   })
//   // },
//   // warn: props => {
//   //   Modal.warning({
//   //     ...props,
//   //     className:'nb-warning-message',
//   //     content: <Content text={props.content}/>,
//   //     icon: <Icon type="gouxuan" color={"#F98900"} size="56px" />
//   //   })
//   // }
// }

export default NbResult
