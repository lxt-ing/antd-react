import classnames from "classnames"
import React from "react"
function Icon(props) {
    const {size = '35px', type='', color = "#CAD0E0"} = props;
    const style = {fontSize:size}
    if(props.defaultColor){
      style['color']=color
    }
    return (
      <span
        style={style}
        className={classnames({
          iconfont: true,
          [`icon-${type}`]: true,
        })}
      ></span>
    )
}
export default Icon