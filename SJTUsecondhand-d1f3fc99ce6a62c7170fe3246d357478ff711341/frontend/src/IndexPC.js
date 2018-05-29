import React from 'react'
import HeaderPC from './components/HeaderPC.js'
import FooterPC from './components/FooterPC.js'
import BodyPC from './components/BodyPC.js'
import { Route, Switch } from 'react-router-dom'
import ShoppingItem from './components/ShoppingItem.js'
import Personal from './components/personal.js'
import Ziliao from './components/Ziliao.js'
import Huobi from './components/Huobi.js'
import Xiaoxi from './components/Xiaoxi.js'
import Dizhi from './components/Dizhi.js'
import Shangpin from './components/Shangpin.js'
import Bodyblow2 from './components/Bodyblow2.js'
import Xiaoshuo from './components/xiaoshuo.js'
import Hot from './components/hot.js'
import BodySliderPC from './components/BodySliderPC.js'
import BodyNavPC from './components/BodyNavPC.js'
import Payment from './components/Payment.js'
import BackToTop from './components/BackToTop.js'
import ShoppingCart from './components/ShoppingCart.js'
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

export default class IndexPC extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <HeaderPC />
        </Row>
        <Switch>
          <Route exact path='/' component={IndexPagePC} />
          <Route path='/item/:id' component={ShoppingItem} />
          <Route path='/shoppingcart/:id' component={ShoppingCart} />
          <Route path='/personal/:id' component={Personal} />
          <Route path='/ziliao/' component={Ziliao} />
          <Route path='/xiaoxi/' component={Xiaoxi} />
          <Route path='/huobi/' component={Huobi} />
          <Route path='/dizhi/' component={Dizhi} />
          <Route path='/shangpin/' component={Shangpin} />
          <Route path='/payment' component={Payment} />
          <Route strict path='/kaoshi/' component={BodyPC2} />
          <Route strict path='/xiaoshuo/' component={inxiaoshuo} />
          <Route strict path='/hot/' component={hotr} />
          <Route path='/personal/:id' component={Personal} />
        </Switch>
        <Footer id='footer'>
          <FooterPC />
        </Footer>
      </div>

    )
  }
}
