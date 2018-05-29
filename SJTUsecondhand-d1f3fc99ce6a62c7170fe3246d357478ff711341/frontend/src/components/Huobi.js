import React from 'react'
import { Table } from 'antd'
import './person.css'
const columns = [{
  title: 'Number',
  dataIndex: 'number',
  key: 'number',
  render: text => <a href='javascript:;'>{text}</a>
}, {
  title: 'Date',
  dataIndex: 'date',
  key: 'date'
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount'
}, {
  title: 'Detail',
  dataIndex: 'detail',
  key: 'detail'
}]
const data = [{
  key: '1',
  number: '516030910001',
  date: '2018-04-25 07:59:59',
  amount: '$100',
  detail: '帮签到'
}, {
  key: '2',
  number: '516030910002',
  date: '2018-04-25 13:50:00',
  amount: '$10',
  detail: '叫醒服务'
}, {
  key: '3',
  number: '516030910003',
  date: '2018-04-25 18:30:00',
  amount: '$200',
  detail: '约自习'
}, {
  key: '4',
  number: '516030910004',
  date: '2018-04-25 22:00:00',
  amount: '$50',
  detail: '刷跑'
}, {
  key: '5',
  number: '516030910005',
  date: '2018-04-26 11:50:00',
  amount: '$500',
  detail: '蓝牙耳机'
}, {
  key: '6',
  number: '516030910006',
  date: '2018-04-28 20:50:00',
  amount: '$1000',
  detail: '《软件工程》'
}, {
  key: '7',
  number: '516030910007',
  date: '2018-05-01 12:00:00',
  amount: '$200',
  detail: '占座'
}, {
  key: '8',
  number: '516030910008',
  date: '2018-05-01 23:50:00',
  amount: '$10000',
  detail: 'ddl'
}, {
  key: '9',
  number: '516030910009',
  date: '2018-05-02 07:50:00',
  amount: '$200000',
  detail: '作业'
}, {
  key: '10',
  number: '516030910010',
  date: '2018-05-02 11:00:00',
  amount: '$5',
  detail: '拼单'
}, {
  key: '11',
  number: '516030910011',
  date: '2018-05-03 18:50:00',
  amount: '$10',
  detail: '鸡蛋灌饼'
}, {
  key: '12',
  number: '516030910012',
  date: '2018-05-04 17:50:00',
  amount: '$30000',
  detail: '五四联谊门票'
}, {
  key: '13',
  number: '516030910013',
  date: '2018-05-05 09:00:00',
  amount: '$500',
  detail: '体侧'
}, {
  key: '14',
  number: '516030910014',
  date: '2018-05-06 22:50:00',
  amount: '$10000',
  detail: 'ddl'
}]
export default class Huobi extends React.Component {
  render () {
    return (
      <div id='Huobi'>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
