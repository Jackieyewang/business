import React from 'react'
import {Row, Col, Radio, DatePicker, Input} from 'antd'
import './person.css'
const RadioGroup = Radio.Group
function onChange (date, dateString) {
  console.log(date, dateString)
}
export default class Ziliao extends React.Component {
  render () {
    return (
      <div id='Ziliao'>
        <Row>
          <Col span={4} />
          <Col span={14}>
            <div align='left'>
              <div id='infor'>
                <h2>账号名:
                  <Input placeholder='Basic usage' size='default size' />
                </h2>
                <h2>登录邮箱:
                  <Input placeholder='Basic usage' />
                </h2>
                <h2>绑定手机:
                  <Input placeholder='Basic usage' />
                </h2>
                <h2>真实姓名:
                  <Input placeholder='Basic usage' />
                </h2>
                <h2>性别
                  <RadioGroup size='large' name='radiogroup' defaultValue={2}>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </RadioGroup>
                </h2>
                <h2>生日：
                  <DatePicker size='large' onChange={onChange} />
                </h2>
                <h2>居住地:
                  <Input placeholder='Basic usage' />
                </h2>
                <h2>家乡:
                  <Input placeholder='Basic usage' />
                </h2>
                <button id='button4'>保存</button>
              </div>
            </div>
          </Col>
          <Col span={2} />
        </Row>
        <Row>
          <div style={{'padding-bottom': 100 + 'px'}} />
        </Row>
      </div>
    )
  }
}
