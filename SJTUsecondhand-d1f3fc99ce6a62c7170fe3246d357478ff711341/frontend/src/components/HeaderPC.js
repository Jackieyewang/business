import React from 'react'
import {Col, Row, Menu, Icon, Modal, Form, Input,
  Tooltip, Tabs, Button, Checkbox} from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, signin } from '$redux/actions'
// import axios from 'axios'
class NormalLoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.objectOf(
      PropTypes.func.isRequired
    ).isRequired,
    login: PropTypes.func.isRequired
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const JSONvalues = JSON.stringify(values)
        console.log('Received values of form: ', JSONvalues, values)
        // let url = 'http://localhost:3001/users/login'
        let url = 'http://120.79.186.162:3001/users/login'
        // let url = 'http://10.162.86.55:8080/users/login'
        // let url = 'http://10.162.86.55:3001/users/login'
        fetch(url,
          {
            name: 'data',
            method: 'POST',
            body: JSONvalues,
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
              // 'Content-type': 'application/json',
              // 'Accept': 'application/json'
            }
          })
          .then(res => {
            console.log(res)
            if (res.status === 500) {
              throw new Error('用户名或密码错误')
            } else {
              return res.json()
            }
          })
          .then(res => {
            console.log(res)
            this.setState({
              user: res[0]
            })
            this.props.login(res[0])
            this.setState({
              loginVisible: false,
              isLogined: true
            })
            console.log(this.state, 'user')
          })
          .catch(err => {
            console.log(err.message)
            alert(err.message)
          })
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your e-mail!' }]
          })(
            <Input prefix={<Icon type='mail' style={{ fontSize: 13 }} />} placeholder='邮箱' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='密码' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住我</Checkbox>
          )}
          {/* <a className='login-form-forgot'>Forgot password</a> */}
          <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
          </Button>
          {/* Or <a>register now!</a> */}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

const FormItem = Form.Item
// const Option = Select.Option

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false
  }
  static propTypes = {
    form: PropTypes.objectOf(
      PropTypes.func.isRequired
    ).isRequired,
    signin: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const JSONvalues = JSON.stringify(values)
        console.log('Received values of form: ', values)
        // let url = 'http://localhost:3001/users/signin'
        let url = 'http://120.79.186.162:3001/users/signin'
        // let url = 'http://10.162.86.55:8080/users/login'
        // let url = 'http://10.162.86.55:3001/users/login'
        fetch(url,
          {
            name: 'data',
            method: 'POST',
            body: JSONvalues,
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            }
          })
          .then(res => {
            console.log(res, 'res')
            if (res.status === 500) throw new Error('邮箱已注册')
            else {
              alert('注册成功')
              return res.json()
            }
          })
          .then(res => {
            console.log(values, 'values')
            // this.setState({
            //   user: values.userName
            // })
            // this.props.login({
            //   username: values.userName
            // })
            // this.setState({
            //   loginVisible: false,
            //   isLogined: false
            // })
            this.props.signin()
            console.log(this.state, 'state')
          })
          .catch(err => {
            alert(err.message)
          })
      }
    })
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      // callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     xs: {
    //       span: 16,
    //       offset: 8
    //     },
    //     sm: {
    //       span: 16,
    //       offset: 8
    //     }
    //   }
    // }
    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '86'
    // })(
    //   <Select className='icp-selector'>
    //     <Option value='86'>+86</Option>
    //   </Select>
    // )
    return (
      <Form onSubmit={this.handleSubmit} id='message'>
        <FormItem
          {...formItemLayout}
          label='邮箱'
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '邮箱地址无效!'
            }, {
              required: true, message: '请输入邮箱!'
            }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='密码'
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!'
            }, {
              validator: this.checkConfirm
            }]
          })(
            <Input type='password' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='确认密码'
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '两次密码不一致!'
            }, {
              validator: this.checkPassword
            }]
          })(
            <Input type='password' onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              昵称&nbsp;
              <Tooltip title='可随时更改'>
                <Icon type='question-circle-o' />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入昵称!' }]
          })(
            <Input />
          )}
        </FormItem>
        {/* <FormItem
          {...formItemLayout}
          label='Phone Number'
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }]
          })(
            <Input addonBefore={prefixSelector} />
          )}
        </FormItem> */}
        {/* <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(
            <Checkbox>I have read the <a>agreement</a></Checkbox>
          )}
        </FormItem> */}
        <FormItem>
          <Button type='primary' htmlType='submit' className='signin-form-button'>注册</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm)

class HeaderPC extends React.Component {
  constructor () {
    super()
    this.state = {
      current: '',
      loginVisible: false,
      isLogined: false,
      user: {}
    }
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    signin: PropTypes.func.isRequired,
    loginProps: PropTypes.bool.isRequired,
    signinProps: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool,
    userProps: PropTypes.object
  }
  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps, 'nextprops')
    if (nextProps.loginProps) {
      this.setState({
        loginVisible: !nextProps.userProps.isLogin,
        userName: nextProps.userProps.userName,
        isLogined: true // for view
      })
    } else if (nextProps.signinProps) {
      this.setState({
        loginVisible: false
      })
    }
    console.log(this.state)
  }
  handleClick = (event) => {
    console.log(event, 'click')
    this.setState({current: event.key})
    if (event.key === 'logIn') {
      this.setState({loginVisible: true})
    } else if (event.key === 'logOut') {
      this.setState({
        loginVisible: false,
        isLogined: false
      })
    }
  }
  handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    fetch('/users/admin/admin')
      .then(res => res.json())
      .then(users => this.setState({ users }))
    console.log(this.state.user)
  }
  handleCancel = () => {
    this.setState({loginVisible: false})
  }

  render () {
    console.log(this.props)
    const userLogin = this.state.isLogined
      ? (
        <Menu.SubMenu title={<span><Icon type='setting' />{this.state.userName}的二手平台</span>}>
          <Menu.Item key='myZone'>
            <Link to={'/personal/' + this.props.userProps.id}><Icon type='user' />个人中心</Link>
          </Menu.Item>
          <Menu.Item key='4' onClick={this.shoppingCart}>
            <Link to={'/shoppingcart/' + this.props.userProps.id}>
              <Icon type='shopping-cart' />购物车
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='database' />我的订单
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='tags-o' />我的收藏
          </Menu.Item>
          <Menu.Item key='logOut'>
            <Icon type='logout' />退出
          </Menu.Item>
        </Menu.SubMenu>
      ) : (
        <Menu.Item key='logIn'>
          <Icon type='user' />登录 | 注册
        </Menu.Item>
      )
    console.log(userLogin)
    // const { getFieldDecorator } = this.props.form;
    return (
      <div id='HeaderPC'>
        <Row height={10 + 'px'}>
          <Col span={1} />
          <Col span={4}>
            <a>
              <img id='logo' src={require('../img/logo.png')} alt='logo' />
              <span id='logoName'>二手交易</span>
            </a>
          </Col>
          <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='0'>
                <Link to='/'><Icon type='book' />首页</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='1'>
                <Link to='/hot/'><Icon type='book' />最热门</Link>
              </Menu.Item>
            </Menu>
          </Col>
          {/* <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='2'>
                <Icon type='database' />我的订单
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='3'>
                <Icon type='tags-o' />我的收藏
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='4'>
                <Icon type='shopping-cart' />购物车
              </Menu.Item>
            </Menu>
          </Col> */}
          {/* <Col span={2}>
            <Menu.SubMenu key='sub0' title={<span><Icon type='appstore' /><span>书籍</span></span>}>
              <Menu.Item key='setting:1'>选项1</Menu.Item>
              <Menu.Item key='setting:2'>选项2</Menu.Item>
              <Menu.Item key='setting:3'>选项3</Menu.Item>
              <Menu.Item key='setting:4'>选项4</Menu.Item>
            </Menu.SubMenu>
          </Col> */}
          <Col span={2} />
          <Col span={3} style={{marginTop: 1 + '%'}}>
            亲，欢迎来到交大二手平台！
          </Col>
          <Col span={1}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='1'>
                <a href='http://localhost:3300/'>
                  <Icon type='customerservice' />
                客服 </a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Input.Search
              id='headSearch'
              placeholder='搜索：'
              style={{width: 100 + '%'}}
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col span={2}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              {userLogin}
            </Menu>
          </Col>
          <Col span={2} />
          <Modal
            title='登陆|注册'
            visible={this.state.loginVisible}
            onCancel={this.handleCancel}
            footer={null}
            width={400}>
            <Tabs defaultActiveKey='1'>
              <Tabs.TabPane key='1' tab='登录'>
                <WrappedNormalLoginForm
                  login={this.props.login} />
              </Tabs.TabPane>
              <Tabs.TabPane key='2' tab='注册'>
                <WrappedRegistrationForm
                  signin={this.props.signin} />
              </Tabs.TabPane>
            </Tabs>
          </Modal>
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
  login: theLoginProps => { dispatch(login(theLoginProps)) },
  signin: () => { dispatch(signin()) },
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPC)
