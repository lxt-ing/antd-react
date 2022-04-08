import React,{useEffect} from 'react'
import NbCheckBox from '../NbCheckbox'
import Style from './index.module.less'
import classnames from 'classnames'
import NbArrow from '../NbArrow'
import NbNumberCounter from '../NbNumberCounter'
export default function NbTable(props) {
  const {isControl=true, fold=false, rowSelection = false, dataSource=[],columns=[], changeRow=(data)=>{console.log(data);} } = props;
  // isControl 是否父级控制
  // true  如父级有编辑选项， 其子数据编辑状态随父操作
  // false 父数据操作与子数据操作分开控制， 各自控制各自内容
  console.log('更新数据-----------');
  const dataSourceCopy = dataSource.slice();
  const columnsCopy = columns.slice();
  const changeData = (fold, rowIndex, colKey, value)=>{
    const data = dataSource.slice()
    if(fold){
      data[rowIndex].open = !data[rowIndex].open
    }else{
      data[rowIndex][colKey] = value;
    }
    console.log(data);
    changeRow(data) 
  }
  if (fold) {
    columnsCopy.push({
      title: '',
      dataIndex: 'arrow',
    })
    dataSourceCopy.forEach((row, i)=>{
      row['arrow'] = <NbArrow open={!row.open} onClick={()=>{
        console.log('点击');
        changeData('ture', i);
      }}></NbArrow>
    })
  }
   // 处理品名
   dataSourceCopy.forEach((item) => {
    if (item.name && item.name.length && item.name.length > 12) {
      item.name = item.name
        .slice(0, 6)
        .concat('...')
        .concat(item.name.slice(-6))
    }
  })
  return (
    <div
      className={classnames({
        'nb-table': true,
        [Style['nb-table']]: true,
      })}
    >
      <div className={Style.table}>
        <div className={Style.thead}>
          <div className={[Style.tableHeader]}>
            <div className={Style.tr}>
              {rowSelection ? (
                <div
                  className={classnames({
                    [Style.td]: true,
                    [Style.checkOccupied]: rowSelection,
                  })}
                ></div>
              ) : null}
              {columnsCopy.map((column) => {
                return (
                  <div
                    className={Style.th}
                    style={{
                      width: `${column.width}px`,
                      textAlign: column['align'],
                      ...column['style']
                    }}
                    key={column.dataIndex}
                  >
                    {column.title}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={Style.tbody}>
          {dataSourceCopy.map((row, rowIndex) => {
            return (
              <div key={`row-${rowIndex}-wrrapper`}>
                <div
                  className={classnames({
                    [Style.checkBodyHeader]: rowSelection,
                    [Style.bodyHeader]: !rowSelection,
                  })}
                >
                  <div
                    className={classnames({
                      [Style.tr]: true,
                      [Style.checkRow]: rowSelection,
                    })}
                    key={`row-${rowIndex}`}
                  >
                    {rowSelection ? (
                      <div
                        className={classnames({
                          [Style.td]: true,
                          [Style.checkbox]: true,
                        })}
                      >
                        <NbCheckBox></NbCheckBox>
                      </div>
                    ) : null}
                    {columnsCopy.map((column, colIndex) => {
                      return (
                        <div
                          className={classnames({
                            [Style['td']]: true,
                            [Style['strong-part']]: column['strong'],
                            [Style['row-number']]:
                              column['dataIndex'] === 'number',
                            [Style['fold-icon']]:
                              fold && colIndex === columnsCopy.length - 1,
                          })}
                          style={{
                            width: `${column.width}px`,
                            justifyContent: column['align'],
                            ...column['style']
                          }}
                          key={`row-${rowIndex}-${colIndex}`}
                        >
                          {
                            column['dataIndex']==='operator' ?  
                            row['operator']({rowIndex:`${rowIndex}`,colKey:column['dataIndex'], editing:row['editing']}):
                            (column['operate'] && row['editing'] ? 
                            row[`${column['dataIndex']}-opt`]({rowIndex:`${rowIndex}`,colKey:column['dataIndex'], editing:row['editing']},  row[column['dataIndex']]) : 
                            row[column['dataIndex']])
                          }
                        </div>
                      )
                    })}
                  </div>
                </div>
                {row?.children?.dataSource?.length ? (
                  <div className={Style.innerRow}>
                    {/* {row.children.map((innerRow, i) => { */}
                      {/* return ( */}
                        <div key={`row-${rowIndex}-children`} className={
                          classnames({
                            [Style.innerTable]:true,
                            [Style.hideChildren]:!row.open
                          })
                        }>
                          <div className={Style.thead}>
                            <div className={Style.tr}>
                              {row.children.columns.map((column) => {
                                return (
                                  <div
                                    className={Style.th}
                                    style={{
                                      width: `${column.width}px`,
                                      justifyContent: column['align'],
                                      ...column['style']
                                    }}
                                    key={`row-${rowIndex}-children-${column.dataIndex}`}
                                  >
                                    {column.title}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          <div className={Style.tbody}>
                            {row.children.dataSource.map((rowChild, rowChildIndex) => {
                              console.log(rowChild['operator']);
                              return (
                                <div className={Style.tr} key={`row-${rowIndex}-children-row-${rowChildIndex}-header`}>
                                  {row.children.columns.map((column, colIndex) => {
                                    return (
                                      <div
                                        className={classnames({
                                          [Style.td]: true,
                                          [Style.bold]: column['strong'],
                                        })}
                                        style={{
                                          width: `${column.width}px`,
                                          justifyContent: column['align'],
                                          ...column['style']
                                        }}
                                        key={`row-${rowIndex}-children-row-${rowChildIndex}-col-${colIndex}`}
                                      >
                                        {/* 父级一条控制所有子数据 */}
                                        {
                                          column['dataIndex']==='operator' ?  
                                          rowChild['operator']({rowIndex:`${rowIndex}-${rowChildIndex}`,colKey:column['dataIndex'], editing:isControl ? row['editing']:rowChild['editing']}):
                                          (column['operate'] && (isControl ? row['editing']:rowChild['editing']) ? 
                                          rowChild[`${column['dataIndex']}-opt`]({rowIndex:`${rowIndex}-${rowChildIndex}`,colKey:column['dataIndex'], editing:isControl ? row['editing']: rowChild['editing']},  rowChild[column['dataIndex']]) : 
                                          rowChild[column['dataIndex']])
                                        }
                                      </div>
                                    )
                                  })}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      {/* ) */}
                    {/* })} */}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
