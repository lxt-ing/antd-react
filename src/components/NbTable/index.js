import React from 'react'
import NbCheckBox from '../NbCheckbox'
import Style from './index.module.less'
import NbSelectCom from '../NbSelectCom'
import classnames from 'classnames'
import Icon from '../Icon'
import NbArrow from '../NbArrow'
import NbButton from '../NbButton'
import NbNumberCounter from '../NbNumberCounter'
export default function NbTable(props) {
  const {fold=false, rowSelection = false, dataSource=[],columns=[], foldRow=(data)=>{console.log(data);} } = props;
  const changeData = (i)=>{
    const data = dataSource.slice()
    data[i].open = !data[i].open
    foldRow(data)
  }
  if (fold) {
    columns.push({
      title: '',
      dataIndex: 'arrow',
    })
    dataSource.forEach((row, i)=>{
      row['arrow'] = <NbArrow open={!row.open} onClick={()=>{
        changeData(i);
      }}></NbArrow>
    })
  }
   // 处理品名
  dataSource.forEach((item) => {
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
              {columns.map((column) => {
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
          {dataSource.map((row, rowIndex) => {
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
                    {columns.map((column, colIndex) => {
                      return (
                        <div
                          className={classnames({
                            [Style['td']]: true,
                            [Style['strong-part']]: column['strong'],
                            [Style['row-number']]:
                              column['dataIndex'] === 'number',
                            [Style['fold-icon']]:
                              fold && colIndex === columns.length - 1,
                          })}
                          style={{
                            width: `${column.width}px`,
                            textAlign: column['align'],
                            ...column['style']
                          }}
                          key={`row-${rowIndex}-${colIndex}`}
                        >
                          {row[column['dataIndex']]}
                        </div>
                      )
                    })}
                  </div>
                </div>
                {row?.children?.length ? (
                  <div className={Style.innerRow}>
                    {row.children.map((innerRow, i) => {
                      return (
                        <div key={`row-${rowIndex}-children-${i}`} className={
                          classnames({
                            [Style.innerTable]:true,
                            [Style.hideChildren]:!row.open
                          })
                        }>
                          <div className={Style.thead}>
                            <div className={Style.tr}>
                              {innerRow.columns.map((column) => {
                                return (
                                  <div
                                    className={Style.th}
                                    style={{
                                      width: `${column.width}px`,
                                      textAlign: column['align'],
                                      ...column['style']
                                    }}
                                    key={`row-${rowIndex}-children-${i}-${column.dataIndex}`}
                                  >
                                    {column.title}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          <div className={Style.tbody}>
                            {innerRow.dataSource.map((row, rowChildIndex) => {
                              return (
                                <div className={Style.tr} key={`row-${rowIndex}-children-row-${rowChildIndex}-header`}>
                                  {innerRow.columns.map((column, colIndex) => {
                                    return (
                                      <div
                                        className={classnames({
                                          [Style.td]: true,
                                          [Style.bold]: column['strong'],
                                        })}
                                        style={{
                                          width: `${column.width}px`,
                                          textAlign: column['align'],
                                          ...column['style']
                                        }}
                                        key={`row-${rowIndex}-children-row-${rowChildIndex}-col-${colIndex}`}
                                      >
                                        {row[column['dataIndex']]}
                                      </div>
                                    )
                                  })}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
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
