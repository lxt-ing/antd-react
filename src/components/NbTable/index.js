import React,{useEffect} from 'react'
import NbCheckBox from '../NbCheckbox'
import Style from './index.module.less'
import classnames from 'classnames'
import NbArrow from '../NbArrow'
export default function NbTable(props) {
  const {isControl=true, fold=false, rowSelection = true, dataSource=[],columns=[], foldRow=(data)=>{console.log(data);} } = props;
  const dataSourceCopy = dataSource.slice();
  const columnsCopy = columns.slice();
  const changeData = (rowIndex,key)=>{
    const data = dataSource.slice()
    data[rowIndex][key] = !data[rowIndex][key]
    foldRow(data) 
  }
  if (fold) {
    columnsCopy.push({
      title: '',
      dataIndex: 'arrow',
    })
    dataSourceCopy.forEach((row, i)=>{
      row['arrow'] = <NbArrow open={!row.open} onClick={()=>{
        changeData(i, 'open');
      }}></NbArrow>
    })
  }
  return (
    <div
      className={classnames({
        'nb-table': true,
        [Style['nb-table']]: true,
      })}
    >
      <div className={Style.table}>
        {/* 表头 */}
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
                      flex: `0 0 ${column.width}px`,
                      justifyContent: column['align'],
                      ...column['style']
                    }}
                    key={column.dataIndex}
                  >
                    {typeof column.title === 'function' ? column['title']() : column.title}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* 表内容 */}
        <div className={Style.tbody}>
          {/* 行内容 */}
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
                        <NbCheckBox checked={row.isSelected} onClick={()=>{
                          changeData(rowIndex, 'isSelected')
                        }}></NbCheckBox>
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
                            flex: `0 0 ${column.width}px`,
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
                            typeof row[column['dataIndex']] === 'function' ? row[column['dataIndex']]({rowIndex:`${rowIndex}`,colKey:column['dataIndex']}) : row[column['dataIndex']])
                          }
                        </div>
                      )
                    })}
                  </div>
                </div>
                {/* 行的子表格 */}
                {row?.children?.dataSource?.length ? (
                  <div className={Style.innerRow}>
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
                                      // flex:`0 0 ${column.width}px`,
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
                                          // flex: `0 0 `,
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
                                          (typeof rowChild[column['dataIndex']] === 'function' ? rowChild[column['dataIndex']]({rowIndex:`${rowIndex}-${rowChildIndex}`,colKey:column['dataIndex']}) : rowChild[column['dataIndex']]))
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
