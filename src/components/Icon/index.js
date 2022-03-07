import classnames from "classnames"
import React from "react"
function Icon(props) {
    const {size = '40px', type='', color=""} = props;
    const style = {fontSize:size}
    if(props.color){
      style['color']=color
    }
    return (
      <span
        style={style}
        className={classnames({
          iconfont: true,
          "gray-icon":color,
          [`icon-${type}`]: true,
        })}
      ></span>
    )
}
export default Icon