# ANTD-based UI framework for Nubomed  

react && antd

## Install

Before install the libarary, you need to : 
1. install antd 
```
npm i antd -S
```
2. install less、less-loader, you can install other versions, but need to  configure it correctly
```
npm i less@4.1.2 less-loader@7.3.0 -D
```
you can configure the react project as you want. Here are some suggestions provided.
* using npm run eject to produce the config file and add some config for less and less-options
* using some plugins to override configuration sucn as customize-cra、customize-cra-less-loader

after your configuration , checked if everything(like antd and less) work fine. Now, you can start to install the packages
```
npm i nb-ui-components -S
```
3. add color config in less modifyvars to override some antd's theme
```
{
    "@primary-color":"#0066E0",
    "@input-hover-border-color":"#0066E0",
    "@input-placeholder-color":"rgba(24, 29, 65, 0.5)",
    "@input-border-color":"#CAD0E0",
    "@input-color":" #181D41",
    "@border-radius-base":"8px",
    "@picker-date-hover-range-border-color":"#0066E0",
    "@picker-date-hover-range-color":"#0066E0",
    "@picker-basic-cell-hover-color": "#0066E0",
    "@picker-panel-cell-height":"48px",
    "@picker-panel-width":"560px",
    "@picker-text-height":"96px",
    "@tooltip-arrow-color":"rgba(24, 29, 65, 0.5)",
    "@tooltip-arrow-width":"40px"
}

```

### Usage

import components and use it like antd.
>以下组件除了列出来的Api，其他可参考antd对应组件的Api
#### NbTabs
使用方式
```
<NbTabs
  selectIndex={index}
  onChange={(index) => {
    setIndex(index)
  }}
></NbTabs>
```
参数Api （非antd)
|参数|说明|类型|默认值|可取值|
|:-:|:-:|:-:|:-:|:-:|
|selectIndex|选中tab索引|Number|--|--|
|type|tab类型|String|'page'|'page'、"title"、 或者 其他字符串|
|options|tab列表|Array|['菜单一','菜单二','菜单三']|--|
|onChange|切换tab方法|Function|--|

#### NbProgress
使用方式
```
 <NbProgress type="line" percent="50"></NbProgress>
```
参数Api (antd-progress组件)
|参数|说明|类型|默认值|可取值|
|:-:|:-:|:-:|:-:|:-:|
|type|progress类型|String|'circle'|'circle'、'line'|

>strokeWidth、 width 、trailColor 、strokeColor 设置有默认的值，不建议覆盖

#### NbSelectCom
使用方式 (antd-select组件)
```
<NbSelectCom
  optionslist={[{ label: 1, value: 1 }]}
  onChange={() => {}}
></NbSelectCom>
```
参数Api
|参数|说明|类型|默认值|可取值|
|:-:|:-:|:-:|:-:|:-:|
|check|是否显示下拉框列表后的自定义√,如果多选，设置true会替换antd自带的√|Boolean|true|ture、false|
|optionslist|下拉列表|Array|[]|[{label:'', value:''}]|
|maxShowDropdonwCount|默认下拉框展示的最大条数，超出滚动显示|Number|5|--|

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|maxTagPlaceholder|...|
|dropdownMatchSelectWidth|true|
|listHeight|lineHeight * maxShowDropdonwCount|
|dropdownMatchSelectWidth|true|
|suffixIcon|Icon组件|
|dropdownClassName|--|
|removeIcon|Icon组件|


#### NbSearch
使用方式
```
<NbSearch onChange={(e)=>{
        setValue(e.target.value)
      }} value={value} onSearch={(val)=>search(val)}></NbSearch>
```
参数Api (antd-Input.search组件)
无，使用antd的Api

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|enterButton|Icon组件|


#### NbSelectButton
使用方式
```
<NbSelectButton
  checked={checked}
  onChange={() => {
    setChecked(!checked)
  }}
>
  插槽内容
</NbSelectButton>
<NbSelectButton
  checked={checked1}
  options={[12, 23, 34]}
  onChange={(data) => {
    setChecked1(data.slice())
  }}
></NbSelectButton>
```
参数Api  (antd-Checkbox组件)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|checked|勾选数据|单选Boolean 多选Array|[]|--|checked值为数组默认多选|
|options|多选的数组|Array|[]|['按钮一']、 [{label:'1', value:'1'}]|--|
|onChange|选中状态改变|Function|单选：()=>{}, 多选：(checkedArr)=>{}|--|--|

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|onClick|()=>{emit('change')}|

#### NbCascader
使用方式
```
<NbCascader
  options={options}
  onChange={(value) => {
    console.log(value)
  }}
></NbCascader>
```
参数Api  (antd-Cascader组件)
参照antd组件Api

#### NbMenu
使用方式
```
<NbMenu menuList={[1, 2, 3]} content={content}></NbMenu>
```
参数Api  (antd-Menu组件)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|menuList|菜单列表|Array|[]|--|--|
|content|菜单内容|Function|null|函数 ({data={index, ...menu}})=>{return <><div></div></>}|

其他：参照antd组件Menu的Api

#### NbDropdown
使用方式
```
<NbDropdown
  DropdownMenu={
    <NbMenu
      onSelect={(data) => {
        console.log(data)
      }}
      selectable={true}
      menuList={[1, 2, 3, 4, 5, 6]}
    >
      <a>123s</a>
    </NbMenu>
  }
  DropdownTitle={<a>hello</a>}
></NbDropdown>
```
参数Api  (antd-Dropdown组件)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|overlayClassName|'nb-dropdown'|

其他：参照antd组件Menu的Api

 #### NbSteps
使用方式
```
<NbSteps current={current} stepOptions={['步骤一', '步骤二', '步骤三']}></NbSteps>
```
参数Api  (非antd)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|current|当前步骤|Number|0|--|从0开始|
|stepOptions|步骤内容|Array|['步骤一', '步骤二', '步骤三']|[{title:'步骤一', icon:<Icon />}]、 ['步骤一']|



#### NbDatePicker && NbRangePicker
使用方式
```
<NbDatePicker onChange={(date, dateString)=>{
  setDate(date)
}} defaultValue={date}></NbDatePicker> 
<NbRangePicker onChange={(date)=>{
  console.log(date);
}} defaultValue={date1}></NbRangePicker>
```
中文版本
```
<NbRangePicker onChange={(date)=>{
  console.log(date);
}} defaultValue={date1}></NbRangePicker>
  <h2>中文日期</h2>
<NbConfigProvider>
```


#### NbAccount
使用方式
```
<NbAccount onChange={(e)=>{
  setAccount(e.target.value)
}} value={acount}></NbAccount>
```
参数Api (antd-Input组件)
无，使用antd的Api

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|prefix|Icon组件|





#### NbBadge
使用方式
```
<NbBadge count={1000}></NbBadge>
```
参数Api (antd-Badge组件)
无，使用antd的Api

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|overflowCount|999|

#### NbPages
使用方式
```
<NbPages onChange={(page,pageSize)=>{
  console.log(page, pageSize)
}} defaultCurrent={1} total={50} defaultCurrent={1} total={50}></NbPages>
```
参数Api (antd-Page组件)
无，使用antd的Api




#### NbButton
使用方式
```
<NbButton onClick={()=>{
  console.log('点击')
}}>123</NbButton>
```
参数Api （非antd)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|type|按钮类型|String|'main'|'big-primary' ...|传入类型：场景-类型， 如果只传场景，按钮类型默认使用default 场景类型字段：big main icon text icontext 按钮类型: default primary danger minor(次要) disabled|
|onClick|点击事件|Function|--|

#### NbInput
使用方式
```
<NbInput value={input} onChange={(e)=>{
  setInput(e.target.value)
}}></NbInput>
```
参数Api (antd-Input组件)
无，使用antd的Api

占用的antd部分字段:
|参数|值|
|:-:|:-:|
|prefix|Icon组件|





#### NbResult
使用方式
```
<NbResult visible={visible}>
  文字插槽
</NbResult>
```
参数Api (antd-Modal组件)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|type|弹窗类型|String|'success'|'succes'、'error'、'warn'||

其他，使用antd的Api

方法
```
NbResult.success({
  content: '123',
})
```

方法类型：'succes'、'error'、'warn'、'loading'
方法参数：
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|content|文字内容|node|--|ReactNode||
|delayClosed|自动关闭时间|Number|--|Number|设置延时自动关闭，为0不关闭|

占用antd字段：
footer、className、bodyStyle、width、mask、maskClosable、content、icon  

#### NbMessage
使用方式 (antd-message)
```
NbMessage.success({
  content: '123',
})
```

方法类型：'succes'、'error'、'warn'
占用antd字段：
className、content、icon  

#### NbConfirm
使用方式
```
<NbConfirm
  visible={visible1}
  onCancel={() => setVisible1(false)}
></NbConfirm>
```
参数Api (antd-Modal组件)
无，使用antd的Api

占用antd字段：
className

#### NbDialog
使用方式
```
 <NbDialog onCancel={() => setVisible2(false)} visible={visible2}></NbDialog>
```
参数Api (antd-Modal组件)
无，使用antd的Api

#### NbNumberCounter
使用方式
```
<NbNumberCounter type="danger" value={value} onChange={(value)=>{
  setValue(value)
}}></NbNumberCounter>
```
参数Api (非antd)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|type|数字框类型|String|'default'|'default'、'danger'、'normal'|蓝色、红色、黑色|
|value|数字框值|Number|0|数字|输入非数字，显示0|
|onChange|数字改变事件|Function|(value)=>{}|(value)=>{}||

#### NbSwitch
使用方式
```
<NbSwitch></NbSwitch>
```
参数Api (antd-Switch组件)
无，使用antd的Api

#### NbArrow
使用方式
```
<NbArrow open={checked}></NbArrow>
```
参数Api (非antd)
|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|open|是否展开|Boolean|false|||

#### NbRadio NbRadioGroup
使用方式
```
<NbRadioGroup defaultValue={1}>
  <NbRadio value={1}></NbRadio>
  <NbRadio value={2}></NbRadio>
  <NbRadio value={3}></NbRadio>
</NbRadioGroup>
```
参数Api (antd-radio、radio.Group组件)
无，使用antd的Api

#### NbCheckbox NbCheckboxGroup
使用方式
```
<NbCheckboxGroup defaultValue={['A']} onChange={(value)=>{
  console.log(value, '---致');
}}>
  <NbCheckbox value={'A'} disabled />
  <NbCheckbox value={'B'} indeterminate={false} />
  <span>hello</span>
</NbCheckboxGroup>
```
参数Api (antd-checkbox、checkbox.Group组件)
无，使用antd的Api

#### NbTable 基础表格
使用方式
```
<NbTable dataSource={dataSource} columns={columns} fold={true} foldRow={(data)=>{
  setDataSource(data);
}}></NbTable>
```
参数Api (非antd)

|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|fold|是否显示折叠箭头|Boolean|false|||
|columns|表头|Array||操作列的dataIndex请使用"operator"|[{title: '数字',dataIndex: 'number',width: 156, align:'center', strong:true, operate:true}]。 其中：align:文字居中方式， strong: 加粗效果, operate: 表示当前列数据需要切换编辑， 如数字切换成数字器， 效期切换成效期组件操作， 当行数据的editing改变时切换， 另需设置属性对应的编辑组件[属性-opt]的值|
|dataSource|表格内容|Array|[]|[{key:'', ['columns对应的dataIndex']:'',children:{columns:[], dataSource:[]}}]|columns字段：{...同上} dataSource字段：{editing:true,number:'123', numer-opt:()=>{}}。 其中：align:文字居中方式， strong: 加粗效果, editing: 是否处于编辑中状态, 编辑状态对应的数据切换成相应的操作, operate: 表示当前列数据需要切换编辑， 如数字切换成数字器， 效期切换成效期组件操作|
|foldRow|切换行内表格|Function|(data)=>{}|(value)=>{}||
|isControl|是否父行表格控制子数据全部编辑|Boolean|true||设置true后，子元素无法控制是否可编辑， 设置false， 父级无法控制子级编辑， 子级自己控制自己|

注意： 
为了实现编辑时组件和值的切换。dataSource表格内容提供了三种情况：
- 内容简单展示值 row['number']
- 内容需要定制 row['number'] = ()=>{return dom}
- 内容需要在值与组件之间切换（如数字点击编辑，进入数字器状态），此时columns数组dataIndex为number的对象operate属性需为true, 数据采用 number-opt 来做为编辑时的替换， 其他类似， 均为属性后拼接-opt

示例一：
```
<NbTable
  dataSource={dataSource}
  columns={columns}
  fold={true}
  foldRow={(data) => {
    setDataSource(data)
  }}
></NbTable>

// 对应的表格列表：
const columns = [
    {
      title: '位置',
      dataIndex: 'pos',
      width: 226,
    },
    {
      title: '品名',
      dataIndex: 'name',
      strong: true,
      width: 404,
    },
    {
      title: '规格',
      dataIndex: 'specification',
      width: 192,
    },
    {
      title: '中文',
      dataIndex: 'zh',
      width: 156,
    },
    {
      title: '英文数字',
      dataIndex: 'num',
      width: 148,
    },
    {
      title: '数量', // 标题
      dataIndex: 'number', // dataSource中对应的key
      width: 186, // 列宽
      strong: true, // 加粗
      align: 'center', // 文本方向
      operate:true // 可动态切换编辑
    },
    {
      title: '单位',
      dataIndex: 'unit',
      width: 168,
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'operator',
      operate:true
    }
  ]
// 初始数据：
// 1. 默认展示数据， 无需做处理
// 2. name属性数据需要展示省略号，但不改变原始值 
const data = [
  {
    key: '1',
    pos: '柜子的名称-0000',
    name: "品名超过十二个的中间省略, 超过用省略号表示",
    specification: '0000…0000',
    zh: '中文内容',
    num: '00000000',
    number: 123,
    unit: '盒',
    children:{
      columns:[],
      dataSource:[]
    }
  }
]
data.forEach(item=>{
  let value = item.name;
  item.name = (opt)=>{
    // opt中可访问 rowIndex colKey属性
    if (value && value.length && value.length > 12) {
    return <div style={{color:'red'}}>{value
      .slice(0, 6)
      .concat('...')
      .concat(value.slice(-6))}</div>
    }
    return value
  }
}
// 3. 父级表格数据点击操作 编辑父级列的数据，同理，子级表格使用相同的处理
item['operator'] = (scopeData) => {
  // scopedDate 返回 {rowIndex: 父级行索引和子级table行索引用-拼接 , editing: 是否编辑状态，用于在不同状态显示不同的按钮 , colKey: 表格列}
  const { rowIndex, editing } = scopeData
  // 行索引 、行子表格索引
  const [fIdx, lIdx] = rowIndex.split('-')
  let newData = data
  let item = newData[fIdx];
  if(lIdx !== undefined){
    // 操作的是children行
    item = item.children.dataSource[lIdx]
  }
  return !editing ?
    <div style={{ display: 'flex' }}>
      <NbButton
        type="text-minor"
        onClick={() => {
          // list 父级中需要变成操作器的属性， 如需要从数字变成数字器
          const list = []
          // list 子级中需要变成操作器的属性， 如需要从数字变成数字器
          const childrenList = ['number', 'expiredDate']
          if(!lIdx){
            // 编辑父行及其子行 如number属性 添加一个changedNumber属性用于保存初始值， 便于后面取消编辑时还原数据
            list.forEach(key=>{
              item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key]
            })
            // 当前行子表格全部添加对应属性
            item.children.dataSource.forEach(list=>{
              childrenList.forEach(childKey=>{
                list[`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`] = list[childKey]
              })
            })
          }else{
            childrenList.forEach(key=>{
              item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`] = item[key] 
            })
          }
          item.editing = true;
          // data 赋值给newData 
          // data 赋值给dataSource
          // 操作newData 赋值给setDataSource 无法更新
          // 不能用newData无法更新 需要使用newData.slice()
          setDataSource(newData.slice())
        }}
      >
        编辑
      </NbButton>
      <div style={{ opacity: 0, width: '20px' }}></div>
      <NbButton
        type="text-primary"
        onClick={() => {
          newData.splice(rowIndex, 1)
          setDataSource(newData.slice())
        }}
      >
        删除
      </NbButton>
    </div>
  : <div style={{ display: 'flex' }}>
      <NbButton
        type="text-minor"
        onClick={() => {
          const list = []
          const childrenList = ['number', 'expiredDate']
          item['editing'] = false;
          if(!lIdx){
            // 保存时与编辑相反， 将changedNumber属性赋值number属性
            list.forEach(key=>{
              item[key] = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
            })
            // 当前行子表格全部添加对应属性
            item.children.dataSource.forEach(list=>{
              childrenList.forEach(childKey=>{
                list[childKey] = list[`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`]
                console.log(list,`changed${childKey.slice(0,1).toUpperCase()+childKey.slice(1)}`);
              })
            })
          }else{
            childrenList.forEach(key=>{
              item[key]  = item[`changed${key.slice(0,1).toUpperCase()+key.slice(1)}`]
            })
          }
          setDataSource(newData.slice())
        }}
      >保存</NbButton>
      <div style={{ opacity: 0, width: '20px' }}></div>
      <NbButton type="text-primary"
        onClick={() => {
          item['editing'] = false;
          setDataSource(newData.slice())
        }}
      >取消</NbButton>
    </div>
  
}
```



#### NbTable 基础表格
使用方式
```
<NbExpireDate date={dayjs(item.expiredDate)} onChange={(date)=>{
  item.changedExpiredDate = dayjs(date).format('YYYY-MM-DD');
  setDataSource(newData.slice())
}}></NbExpireDate>
```
参数Api (非antd)

|参数|说明|类型|默认值|可取值|备注|
|:-:|:-:|:-:|:-:|:-:|:-:|
|date|日期|Object|当前日期|dayjs||
|joinStr|日期连接符|String|'-'|["-", "/"]||
|yearCount|显示的年份个数|Number|7|Number||
|onChange|改变日期|Function|()=>{}|function||

