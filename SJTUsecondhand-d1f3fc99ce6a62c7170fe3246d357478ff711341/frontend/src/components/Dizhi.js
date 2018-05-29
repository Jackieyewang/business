import React from 'react'
import { Table, Divider, Icon, notification } from 'antd'
import PropTypes from 'prop-types'
import './person.css'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { changeAddress } from '$redux/actions'

const columns = [{
  title: '收货人',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href='javascript:;'>{text}</a>
}, {
  title: '所在地址',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '详细地址',
  dataIndex: 'detail',
  key: 'detail'
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone'
}, {
  title: '邮编',
  dataIndex: 'youbian',
  key: 'youbian'
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>删除</a>
      <Divider type='vertical' />
      <a href='javascript:;'>修改</a>
    </span>
  )
}]
class Dizhi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }
  static propTypes = {
    userProps: PropTypes.object.isRequired,
    changeAddress: PropTypes.func.isRequired
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    notification.open({
      message: 'Notification Title',
      description: '修改成功',
      onClose: close,
      icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
    })
    this.props.changeAddress({
      address: this.state.value,
      id: this.props.userProps.id
    })
    setTimeout(() => {
      this.setState({redirect: true})
    },
    4000
    )
  }
  render () {
    const data = [{
      key: '1',
      name: this.props.userProps.userName,
      detail: this.props.userProps.address,
      phone: this.props.userProps.email
      // youbian: '201100'
    }]
    let redirect = <div />
    if (this.state.redirect) {
      redirect = <Redirect push to='/' /> // or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }
    return (
      <div id='Dizhi' align='left'>
        {redirect}
        <div id='address'>
          <form onSubmit={this.handleSubmit}>
            <h1>收货地址</h1>
            <p style={{'color': 'red'}}>修改收货地址 均为必填项</p>
            {/* <h2>所在地区
            <Cascader options={options} onChange={onChange} placeholder='Please select' style={{ 'padding-left': 30, width: 400 }} />
          </h2> */}
            <h2>详细地址<input type='text' id='address' style={{'margin-left': 30 + 'px'}} onChange={this.handleChange} /></h2>
            {/* <h2>收货人姓名<input type='text' id='name' style={{'margin-left': 10 + 'px'}} /></h2> */}

            <h2><input type='checkbox' id='moren' />设为默认地址</h2>
            <button id='save' >保存</button>
          </form>
          <Table columns={columns} dataSource={data} />
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
  changeAddress: theLoginProps => { dispatch(changeAddress(theLoginProps)) }

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dizhi)
