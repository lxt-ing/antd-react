[
    {
        key: '1',
        pos: '柜子的名称-0000',
        name: '品名超过十二个的中间省略, 超过用省略号表示',
        specification: '0000…0000',
        zh: '中文内容',
        num: '00000000',
        changedNumber:'00000000',
        number: (data)=>{
          const { rowIndex, edited } = data
          let newData = dataSource.slice()
          const item = newData[rowIndex];
          return (
            edited ? (<NbNumberCounter value={item.changedNumber} onChange={(value)=>{
              item.changedNumber = value;
              console.log(item.changedNumber);
            }}></NbNumberCounter>) : '123'
          )
        },
        unit: '盒',
        operator: (data) => {
          const { rowIndex, edited } = data
          let newData = dataSource.slice()
          const item = newData[rowIndex];
          return !edited ? (
            <div style={{ display: 'flex' }}>
              <NbButton
                type="text-minor"
                onClick={() => {
                  item.changedNumber = item['number'];
                  item.showNumberCounter = true;
                  setDataSource(newData)
                }}
              >
                编辑
              </NbButton>
              <div style={{ opacity: 0, width: '20px' }}></div>
              <NbButton
                type="text-primary"
                onClick={() => {
                  newData.splice(rowIndex, 1)
                  setDataSource(newData)
                }}
              >
                删除
              </NbButton>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <NbButton
                type="text-minor"
                onClick={() => {
                  item['showNumberCounter'] = false;
                  item['number'] = item['changedNumber'];
                  setDataSource(newData)
                }}
              >
                保存
              </NbButton>
              <div style={{ opacity: 0, width: '20px' }}></div>
              <NbButton
                type="text-primary"
                onClick={() => {
                  item['showNumberCounter'] = false;
                  setDataSource(newData)
                }}
              >
                取消
              </NbButton>
            </div>
          )
        },
        children: [
          {
            columns: [
              {
                title: '中文',
                dataIndex: 'date',
                width: 156,
              },
              {
                title: '数字和英文',
                dataIndex: 'batchNo',
                width: 220,
              },
              {
                title: '数量',
                dataIndex: 'expiredDate',
                width: 110,
                align: 'center',
                strong: true,
              },
              {
                title: '文本多选框',
                dataIndex: 'kuangkuang',
                width: 305,
              },
              {
                title: '数字器',
                align: 'center',
                dataIndex: 'shuziqi',
                width: 206,
              },
            ],
            dataSource: [
              {
                key: '1',
                date: '29292912',
                batchNo: '2020102134521',
                expiredDate: '202',
                kuangkuang: (
                  <NbSelectCom
                    optionslist={[{ label: '测试', value: 'text' }]}
                    size="large"
                  ></NbSelectCom>
                ),
                shuziqi: <NbNumberCounter></NbNumberCounter>,
              },
              {
                key: '2',
                date: '29292912',
                batchNo: '20201021',
                expiredDate: '202',
                kuangkuang: (
                  <NbSelectCom
                    optionslist={[{ label: '测试', value: 'text' }]}
                    mode="multiple"
                    size="small"
                  ></NbSelectCom>
                ),
                shuziqi: <NbNumberCounter></NbNumberCounter>,
              },
            ],
          },
        ],
      },
      {
        key: '2',
        pos: '柜子的名称-0000',
        name: '品名超过十二个的中间省略, 超过用省略号表示',
        specification: '0000…0000',
        zh: '中文内容',
        num: '00000000',
        number: '000',
        unit: '盒',
        // operator:<OptGroup id={'1'}></OptGroup>,
        children: [
          {
            columns: [
              {
                title: '中文',
                dataIndex: 'date',
                width: 156,
              },
              {
                title: '数字和英文',
                dataIndex: 'batchNo',
                width: 220,
              },
              {
                title: '数量',
                dataIndex: 'expiredDate',
                width: 110,
                strong: true,
                align: 'center',
              },
              {
                title: '文本多选框',
                dataIndex: 'kuangkuang',
                width: 305,
              },
              {
                title: '数字器',
                align: 'center',
                dataIndex: 'shuziqi',
                width: 206,
              },
            ],
            dataSource: [
              {
                key: '1',
                date: '29292912',
                batchNo: '20201021',
                expiredDate: '20201',
                kuangkuang: <NbSelectCom size="small"></NbSelectCom>,
                shuziqi: <NbNumberCounter></NbNumberCounter>,
              },
            ],
          },
        ],
      },
]