import React from 'react'
import HeaderPC from './components/HeaderPC.js'
import FooterPC from './components/FooterPC.js'
import BodyPC from './components/BodyPC.js'
import { Route, Switch } from 'react-router-dom'
import ShoppingItem from './components/ShoppingItem.js'
import ChatRoom from './components/chat'
import BodySliderPC from './components/BodySliderPC.js'
import BodyNavPC from './components/BodyNavPC.js'
import Bodyblow2 from './components/Bodyblow2.js'
import Xiaoshuo from './components/xiaoshuo.js'
import Hot from './components/hot.js'
import BackToTop from './components/BackToTop.js'
import { Row, Col, Layout } from 'antd'

const { Footer } = Layout
class IndexPagePC extends React.Component {
  render () {
    return (
      <div>
        <BodyPC />
      </div>
    )
  }
}

class inxiaoshuo extends React.Component {
  render () {
    return (
      <div>
        <Xiaoshuo />
      </div>
    )
  }
}
class BodyPC2 extends React.Component {
  render () {
    return (
      <div id='BodyPC2'>
        <BackToTop />
        <Row>
          <Col span={2} />
          <Bodyblow2 />
          <Col span={2} />
        </Row>
      </div>
    )
  }
}

class hotr extends React.Component {
  render () {
    return (
      <div id='hotr'>
        <BackToTop />
        <Row>
          <Col span={2} offset={6}>
            <BodyNavPC />
          </Col>
          <Col span={10}>
            <BodySliderPC />
          </Col>
        </Row>
        <Row>
          <Col span={2} />
          <Hot />
          <Col span={2} />
        </Row>
      </div>
    )
  }
}

class chat extends React.Component {
  render () {
    return (
      <div id='chat'>
        <ChatRoom />
      </div>
    )
  }
}

export default class IndexPC extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <HeaderPC />
        </Row>
        <Switch>
          <Route exact path='/' component={IndexPagePC} />
          <Route strict path='/kaoshi/' component={BodyPC2} />
          <Route strict path='/xiaoshuo/' component={inxiaoshuo} />
          <Route strict path='/hot/' component={hotr} />
          <Route path='/item/:id' component={ShoppingItem} />
          <Route path='/chat/' component={chat} />
        </Switch>
        <Footer id='footer'>
          <FooterPC />
        </Footer>
      </div>

    )
  }
}
