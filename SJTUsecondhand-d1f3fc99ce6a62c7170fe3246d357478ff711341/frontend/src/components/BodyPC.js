import React from 'react'
import { Row, Col, Affix, Card, Avatar, Tabs } from 'antd'
import BodySliderPC from './BodySliderPC.js'
import BodyNavPC from './BodyNavPC.js'
// import { Route, Switch } from 'react-router-dom'
import Bodyblow from './Bodyblow.js'
import BackToTop from './BackToTop.js'
const TabPane = Tabs.TabPane

export default class BodyPC extends React.Component {
  render () {
    return (
      <div id='BodyPC'>
        <BackToTop />
        <Row>
          <Col span={2} offset={2}>
            <Affix><BodyNavPC /></Affix>
          </Col>
          <Col span={11} >
            <BodySliderPC />
          </Col>
          <Col span={3}>
            <div><img id='you1' src={require('../img/you1.png')} /></div>
          </Col>
          <Col span={1}>
            <Card id='you2' style={{backgroundColor: '#fffaf0', width: 300}}>
              <Avatar size='large' src={require('../img/you2.png')} />
              <p> Hey!欢迎来到交大蛤力！</p>
              <p> 登录 注册</p>
              <Tabs defaultActiveKey='1'>
                <TabPane tab='促销' key='1' >
                  <p>惠普光影精灵II代新品首发</p>
                  <p>荣耀10新品上市</p>
                  <p>中国芯在交大上市</p>
                  <p>爱玛电动车 社会人标配坐骑</p>
                  <p>小猪佩奇社会交大人只售28</p>
                </TabPane>
                <TabPane tab='通知' key='2'>
                  <p>交大蛤力会员权益公布</p>
                  <p>交大电院俞家力发明中国芯</p>
                  <p>交大蛤力市场试营</p>
                  <p>特朗普和江泽民牵手在木槿共赏复联</p>
                </TabPane>
              </Tabs>
              <img id='erwma' src={require('../img/erwma.jpg')} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={2} />
          <Bodyblow />
          <Col span={2} />
        </Row>
      </div>
    )
  }
}
