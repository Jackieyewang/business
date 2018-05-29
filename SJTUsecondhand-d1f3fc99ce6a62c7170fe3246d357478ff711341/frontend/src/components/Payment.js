import React from 'react'
import { Row, Col, Steps, Radio, Card, Button, Table, notification, Icon } from 'antd'
import { connect } from 'react-redux'
import { getShoppingItemInfo, makeOrder, removeInCart } from '$redux/actions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
const Step = Steps.Step
const RadioGroup = Radio.Group

class Payment extends React.Component {
  state = {
    value: 1
  }
  static propTypes = {
    // match: PropTypes.object.isRequired,
    shoppingCartItem: PropTypes.array.isRequired,
    makeOrder: PropTypes.func.isRequired,
    userProps: PropTypes.object.isRequired
    // shoppingItemInfo: PropTypes.object.isRequired
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  makeIndex = (item) => {
    console.log(item)
    return (
      <li>
        <div>
          <img id='item' src={require('../img/' + item.item_id + '.jpg')} />
        </div>
        <div>
          {item.item_name}
        </div>
        <div>
          {item.price}
        </div>
      </li>
    )
  }
  handleSubmit = (e) => {
    if (this.sum < this.props.userProps.money) {
      notification.open({
        message: 'Notification Title',
        description: '支付成功',
        onClose: close,
        icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
      })
      this.props.makeOrder({
        shoppingCartItem: this.props.shoppingCartItem,
        money: this.props.userProps.money,
        id: this.props.userProps.id})
      setTimeout(() => {
        this.setState({redirect: true})
      },
      4000
      )
    } else {
      notification.open({
        message: 'Notification Title',
        description: '余额不足',
        onClose: close,
        icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
      })
    }
  }
  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    const columns = [{
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: logo => <img style={{width: '100px', height: '100px'}} id='item' src={require('../img/' + logo + '.jpg')} />
    }, {
      title: '产品名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price'
    }]
    let data = []
    for (let i in this.props.shoppingCartItem) {
      data.push({
        key: i + 1,
        logo: this.props.shoppingCartItem[i].item_id,
        name: this.props.shoppingCartItem[i].item_name,
        price: this.props.shoppingCartItem[i].price
      })
    }
    this.sum = 0
    for (let i in this.props.shoppingCartItem) {
      this.sum += this.props.shoppingCartItem[i].price
    }
    let redirect = <div />
    if (this.state.redirect) {
      redirect = <Redirect push to='/' /> // or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }
    return (

      <div>
        {redirect}
        <Row>
          <Col span={2} />
          <Col span={18}><Steps current={0}>
            <Step title='确认订单信息' />
            <Step title='付款' />
            <Step title='确认收货' />
            <Step title='双方互评' />
          </Steps>
          </Col>
          <Col span={2} />
        </Row>
        <Row>
          <Col span={4}><p><font size='3'><strong>确认收货地址</strong></font></p></Col>
          <Col span={16} />
          <Col span={4}><a href='https://www.baidu.com'>管理收货地址</a></Col>
        </Row>
        <Row>

          <Card bordered={false} style={{ width: 800 }}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <p><Radio style={radioStyle} value={1}>地址：{this.props.userProps.address}</Radio></p>

            </RadioGroup>
          </Card>

        </Row>

        <Row>
          <Col span={4}><p><font size='3'><strong>确认订单信息</strong></font></p></Col>
          <Col span={16} />
          <Col span={4} />
        </Row>
        <Row>
          <Col span={6}><p>店铺宝贝</p></Col>
          <Col span={6}><p>商品属性</p></Col>
          <Col span={4}><p>单价</p></Col>
          <Col span={4}><p>数量</p></Col>
          <Col span={4}><p>小计</p></Col>

        </Row>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Table
              style={{
                paddingTop: '40px'
              }}
              columns={columns}
              bordered
              dataSource={data} />
          </Col>
        </Row>
        <Row>
          <Col span={16} />
          <Col span={8}>
            <Card style={{ width: 400 }}>

              <p>寄送至：{this.props.userProps.address}</p>
              <p>收货人：{this.props.userProps.userName}</p>
              我的余额：<h4>{this.props.userProps.money}</h4>
              支付金额:<h4>{this.sum}</h4>

            </Card></Col>

        </Row>
        <Row>
          <Col span={20} />
          <Col span={4}><Button type='submit' onClick={this.handleSubmit}>提交订单</Button></Col>

        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  shoppingCartItem: state.user.shoppingCartItem,
  userProps: state.user.userProps
})

const mapDispatchToProps = dispatch => ({
  getShoppingItemInfo: theLoginProps => { dispatch(getShoppingItemInfo(theLoginProps)) },
  makeOrder: theLoginProps => { dispatch(makeOrder(theLoginProps)) },
  removeInCart: theLoginProps => { dispatch(removeInCart(theLoginProps)) },
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)
