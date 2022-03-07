import React from 'react'
import { message } from 'antd'
import Icon from '../Icon'
import 'antd/lib/message/style'
const IconConfigs = [
  { state: 'success', type: 'gouxuan', color: '#00A572' },
  { state: 'warning', type: 'gouxuan', color: '#F98900' },
  { state: 'error', type: 'fox', color: '#E52D3E' },
]
const NbMessage = {}
const types = ['success', 'warning', 'error']
types.forEach((type) => {
  console.log('生成111');
  NbMessage[type] = (config={}) => {
    const IconConfig = IconConfigs.find((item) => item.state === type)
    if(types.includes(type)){
      console.log(type, '---类型');
      config.className = `nb-${type}-message`;
      config.icon = <Icon type={IconConfig.type || 'gouxuan'} color={IconConfig.color} size="56px"></Icon> 
    }
    console.log('調用', config);
    message[type](config)
  }
})
export default NbMessage
