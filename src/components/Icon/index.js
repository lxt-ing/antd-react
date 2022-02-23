import classnames from "classnames"
function Icon(props) {
    const {size = '35px', type='', color = "#CAD0E0"} = props;
    return (
      <span
        style={{fontSize:size,color:color}}
        className={classnames({
          iconfont: true,
          [`icon-${type}`]: true,
        })}
      ></span>
    )
}
export default Icon