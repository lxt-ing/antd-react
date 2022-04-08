import React,{useEffect} from "react"
import Style from "./index.module.less"
import classnames from "classnames"
export default function NbSwitch(props){
  const {type='default',onChange=(value)=>{}, value=0,...rest} = props;
  useEffect(()=>{
    console.log(value,'===内部值');
    if(isNaN(value)){
      onChange(0)
    }
  }, [value])
  return (
    <div className={Style['nb-number-counter']}>
      <button disabled={parseInt(value)===0} onClick={()=>{
        onChange(parseInt(value)-1)
      }}>
        <span></span>
      </button>
      <input className={
        classnames({
          [Style[`nb-${type}-input`]]:true
        })
      } value={parseInt(value)} onChange={(e)=>{
        onChange(e.target.value)
      }}/>
      <button onClick={()=>{
        onChange((parseInt(value))+1)
      }}>
        <span></span>
        <span className={Style['add-line']}></span>
      </button>
    </div>
  )
}