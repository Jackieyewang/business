import React from 'react'
import { Table, Row, Col, Button, Popconfirm } from 'antd'
import {Link} from 'react-router-dom'
import './shoppingItem.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getShoppingItemInfo, addToCart, removeInCart } from '$redux/actions'

class ShoppingItem extends React.Component {
  constructor (...props) {
    super(...props)
    this.id = this.props.match.params.id
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    shoppingCartItem: PropTypes.array.isRequired,
    removeInCart: PropTypes.func.isRequired
    // addToCart: PropTypes.func.isRequired,
    // shoppingItemInfo: PropTypes.object.isRequired
  }
  componentWillMount = () => {
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
  onDelete = (e) => {
    console.log(e)
    this.props.removeInCart(e)
  }
  render () {
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
    }, {
      title: '操作',
      key: 'action',
      render: (text, record, index) => (
        <Popconfirm title='Sure to delete?' onConfirm={() => this.onDelete(index)}>
          <a href='#'>Delete</a>
        </Popconfirm>
      )
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
    return (
      <div>
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
          <Col span={4} />
        </Row>
        <Row>
          <Col span={16} />
          <Col>
            <Button
              size='large'
              style={{
                width: '120px',
                margin: '20px'
              }}
              type='primary'>
              <Link to='/payment'>
              支付
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shoppingCartItem: state.user.shoppingCartItem
})

const mapDispatchToProps = dispatch => ({
  getShoppingItemInfo: theLoginProps => { dispatch(getShoppingItemInfo(theLoginProps)) },
  addToCart: theLoginProps => { dispatch(addToCart(theLoginProps)) },
  removeInCart: theLoginProps => { dispatch(removeInCart(theLoginProps)) },
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingItem)
