import React,{useState} from 'react'
import classnames from 'classnames'
import Icon from "../Icon"
import style from "./index.module.less"
import { options } from 'less';
function NbPersonalLayout(props) {
  const {menu=[],user={avatar:'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg', userName:'用户名称'}, index=0, activeColor="#fff"} = props;
  const {avatar, userName} = user;
  return (
    <div className={style['nb-person-layout']}>
      <div className={style['nb-person-left']}>
        <div className={style['nb-avatar']}>
          <img className={style['nb-avatar-img']} src={avatar} alt=""/>
          <span className={style['nb-avatar-name']}>{userName}</span>
        </div>
        <div className={style['nb-person-menu']}>
          {menu.map((option,i)=>{
            return (
              <div onClick={()=>{props.menuClick(i)}} key={`nb-person-menu-${i}`} className={
                classnames({
                  [style['nb-menu-list']]:true,
                  [style['nb-menu-list-active']]:i === index
                })
              }>
                <div className={style['nb-menu-content']}>
                  <div className={style['nb-conent-main']}>
                    <Icon type={option.type} color={i===index ? activeColor : option.color} size={'40px'}></Icon>
                    <span className={style['nb-menu-title']}>{option.title}</span>
                  </div>
                  <Icon type={'Right'} color={i===index ? activeColor : '#CAD0E0'} size={'32px'}></Icon>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={style['nb-person-right']}>
        { props.children }
      </div>
    </div>
  )
}

export default NbPersonalLayout