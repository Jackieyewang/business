import React from 'react'
import { notification, Icon } from 'antd'
import PropTypes from 'prop-types'
import './person.css'
import {connect} from 'react-redux'
import { publish } from '$redux/actions'
import { Redirect } from 'react-router-dom'

class Shangpin extends React.Component {
  state = {
    name: '',
    info: '',
    price: 0
  }
  static propTypes = {
    publish: PropTypes.func.isRequired,
    userProps: PropTypes.object.isRequired
  }
  handleChangeInfo = (e) => {
    this.setState({info: e.target.value})
  }
  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }
  handleChangePrice = (e) => {
    // console.log(this.state)
    this.setState({price: e.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.publish({
      id: this.props.userProps.id,
      info: this.state.info,
      name: this.state.name,
      price: this.state.price
    })
    notification.open({
      message: 'Notification Title',
      description: '发布成功',
      onClose: close,
      icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
    })
    // setTimeout(() => {
    //   this.setState({redirect: true})
    // },
    // 4000
    // )
  }
  render () {
    let redirect = <div />
    if (this.state.redirect) {
      redirect = <Redirect push to='/' /> // or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }
    return (
      <div id='Shangpin' align='left'>
        {redirect}
        <div id='thing'>
          <form onSubmit={this.handleSubmit}>
            <h2>商品名称：</h2><input type='text' id='name' size='50' style={{'marginLeft': 20 + 'px'}} onChange={this.handleChangeName} />
            <br />
            <h2>商品详细描述：</h2>
            <br />
            <input id='des' type='text' size='100' style={{'height': 100 + 'px'}} placeholder='包括牌子、在哪购买、目前状况等' onChange={this.handleChangeInfo} />
            <br />
            <br />
            {/* <h2>已使用年限：<input type='number' required /></h2> */}
            <br />
            {/* <h2>原价：<input type='number' style={{'margin-left': 65 + 'px'}} required /></h2> */}
            <br />
            <h2>意向价格：<input type='text' style={{'marginLeft': 20 + 'px'}} onChange={this.handleChangePrice} /></h2>
            <br />
            {/* <h2>上传图片<input type='file' /></h2> */}
            <button style={{'color': 'red'}}>发布商品</button>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userProps: state.user.userProps,
  loginProps: state.user.loginProps,
  signinProps: state.user.signinProps
})
const mapDispatchToProps = dispatch => ({
  publish: theLoginProps => { dispatch(publish(theLoginProps)) }

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shangpin)
