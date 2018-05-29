import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Menu, Icon } from 'antd'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './person.css'
// import PropTypes from 'prop-types'
class Personal extends React.Component {
    static propTypes = {
      userProps: PropTypes.object.isRequired
    }
    handleClick = () => {

    }
    render () {
      let name = this.props.userProps.userName
      let email = this.props.userProps.email
      let address = this.props.userProps.address
      return (
        <div id='Personal'>
          <Row>
            <Col span={2} />
            <Col span={6}>
              <div id='menu'>
                <Menu
                  mode='inline'
                  onClick={this.handleClick}
                  // style={{width: 240 + 'px'}}
                  defaultOpenKeys={['sub1']}
                >
                  <Menu.SubMenu key='sub0' title={<span><Icon type='user' /><span>个人信息管理</span></span>}>
                    <Menu.Item key={0}>
                      <Link to='/ziliao/'>个人资料</Link>
                    </Menu.Item>
                  </Menu.SubMenu>
                  <Menu.SubMenu key='sub1' title={<span><Icon type='swap' style={{'paddingRight': 45 + 'px'}} /><span>交易管理</span></span>}>
                    <Menu.Item key={4}>
                      <Link to='/huobi/'>货币明细</Link>
                    </Menu.Item>
                    <Menu.Item key={5}>
                      <Link to='/xiaoxi/'>消息中心</Link>
                    </Menu.Item>
                    <Menu.Item key={6}>
                      <Link to='/dizhi/'>收货地址</Link>
                    </Menu.Item>
                    <Menu.Item key={7}>
                      <Link to='/shangpin/'>发布商品</Link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </div>
            </Col>
            <Col span={14}>
              <div id='content' align='left'>
                <h2>您的基础信息</h2>
                <h4>账号名: {
                  name
                }<button id='button1'><em>点击修改</em></button></h4>
                <h4>登录邮箱：{email}<button id='button2'><em>点击修改</em></button></h4>
                <h4>绑定手机：未绑定<button id='button3'><em>点击绑定</em></button></h4>
                <h4>真实姓名：未认证<button id='button3'><em>点击绑定</em></button></h4>
                <h4>地址：{address}</h4>
                <h4>余额：{this.props.userProps.money}</h4>
              </div>
            </Col>
            <Col span={2} />
          </Row>
          <Row>
            <div style={{'padding': 800 + 'px'}} />
          </Row>
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

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal)
