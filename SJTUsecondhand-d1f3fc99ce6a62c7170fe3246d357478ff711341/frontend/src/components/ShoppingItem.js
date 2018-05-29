import React from 'react'
import { Row, Col, Button, Tabs, notification, Icon } from 'antd'
import {Link} from 'react-router-dom'
import './shoppingItem.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getShoppingItemInfo, addToCart } from '$redux/actions'

class ShoppingItem extends React.Component {
  constructor (...props) {
    super(...props)
    this.id = this.props.match.params.id
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    getShoppingItemInfo: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    shoppingItemInfo: PropTypes.object.isRequired
  }
  buy = (e) => {
    console.log('buy')
    this.props.addToCart(this.props.shoppingItemInfo)
    // notification.open({
    //   message: 'Notification Title',
    //   description: '添加成功',
    //   onClose: close,
    //   icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
    // })
  }
  addToCart = (e) => {
    // let itemID = this.props.shoppingItemInfo.item_id
    this.props.addToCart(this.props.shoppingItemInfo)
    notification.open({
      message: 'Notification Title',
      description: '添加成功',
      onClose: close,
      icon: <Icon type='smile-circle' style={{ color: '#108ee9' }} />
    })
  }
  componentWillMount = () => {
    console.log(this.id)
    this.props.getShoppingItemInfo(this.id)
  }
  render () {
    return (
      <div>
        <Row>
          <Col span={2} />
          <Col span={20}>
            <div className='top-nav'>
              <div className='others-wrap'>
                <ul className='others clearfix'>
                  <li>
                    <div className='seller-info'>
                      <div className='avatar'>
                        <img src={require('../img/logo.png')} />
                      </div>
                      <div className='user-name' align='left' >
                        Jonathanyjl
                      </div>
                    </div>
                  </li>
                  <li id='J_Browse' >
                    <h5>宝贝浏览次数</h5>
                  </li>
                  <li><h5>最近编辑</h5><span>{this.props.shoppingItemInfo.submission_date}</span></li>
                </ul>
                <div className='user-icons'>
                  <span title='已通过实名认证' className='user-verify' />
                  <span title='vip0' className='vip-level  vip-level0' rel='nofollow' />
                </div>
                <b className='arrow-wrap'><i className='arrow' /></b>
              </div>
            </div>
          </Col>
          <Col span={2} />
        </Row>
        <Row>
          <Col span={2} />
          <Col span={13} style={{backgroundColor: '#ddd'}} >
            <div className='shopping-item-img'
              style={{marginLeft: 10 + 'px', marginRight: 10 + 'px'}}>
              <img alt='slider' src={require('../img/' + this.id + '.jpg')} />
            </div>
          </Col>
          <Col span={7} align='left' style={{padding: 10 + 'px'}} >
            <h1 className='title'>{this.props.shoppingItemInfo.item_name}</h1>
            <ul className='price-info'>
              <li className='price-block'>
                <span className='para'>转&nbsp;&nbsp;卖&nbsp;&nbsp;价：</span>
                <span className='price big'><b>&yen;</b><em>{this.props.shoppingItemInfo.price}</em></span>

              </li>
            </ul>
            <ul className='idle-info' data-spm='2007.1000338.3'>
              <li>
                <span className='para'>成　　色：</span>
                <em>非全新</em>
              </li>
              <li>
                <span className='para'>所&nbsp;&nbsp;在&nbsp;&nbsp;地：</span>
                <em>浙江杭州 西湖区</em>
              </li>
              <li className='contact'>
                <span className='para'>联系方式：</span>
                <div style={{'display': 'none'}}>
                  <span className='J_WangWang' data-nick='tel18856086975' data-icon='large' />
                </div>
              </li>
              <li className='trade-terms' id='J_TradeWrap'>
                <span className='para'>交易方式：</span>
                <a href='#'><span data-term='0' className='J_Term term'>在线交易</span></a>
              </li>
            </ul>
            <Button type='danger' className='buy-button' onClick={this.buy}>
              <Link to='/payment'>购买</Link>
            </Button>
            <Button type='danger' className='addtocart-button' onClick={this.addToCart}>
              加入购物车
            </Button>
          </Col>
          <Col span={2} />
        </Row>
        <Row>
          <Col span={2} />
          <Col span={13} className='shopping-item-info' align='left'>
            <Tabs type='card'>
              <Tabs.TabPane tab='宝贝介绍' key='1'>
                <h4 align='left' style={{'margin': '20px 0'}}><b>如遇到以下情况可能是诈骗行为：1.宝贝价格异常低；2.卖家要求QQ沟通；3.卖家要求直接汇款。 寻求防骗经验。</b></h4>
                <h2 align='left' sytle={{'paddingBottom': 15 + 'px'}}><b> 宝贝介绍</b> </h2>
                <p align='left'> {this.props.shoppingItemInfo.item_name} </p>
                <h2 align='left' style={{'marginBottom': 15 + 'px'}}><b>留言</b></h2>
                <p align='left'> {this.props.shoppingItemInfo.info} </p>
                <h2 align='left' style={{'marginBottom': 15 + 'px'}}><b>安全保证</b></h2>
                <ul className='guarantee'>
                  <li className='first'>
                    <b className='icon' >
                      <img src={require('../img/guarantee1.png')} />
                    </b>
                    <div className='intro'>
                      <h4>卖家实名认证</h4>
                      <p>交大二手卖家必备网络身份证；</p><p>经支付宝核实会员身份信息和银行账户信息。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'><span>真实&nbsp;·&nbsp;可靠&nbsp;·&nbsp;网络身份证</span></div>
                  </li>
                  <li className='second'>
                    <b className='icon' >
                      <img src={require('../img/guarantee2.png')} />
                    </b>
                    <div className='intro'>
                      <h4>专业团队支撑</h4>
                      <p>发现可疑卖家或商品，发起举报，</p><p>由安全部门专员介入处理交易出现纠纷，双方协</p><p>商不成，由专业的客服小二介入仲裁。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'>专业&nbsp;·&nbsp;精英&nbsp;·&nbsp;全方位支持</div>
                  </li>
                  <li className='third'>
                    <b className='icon' >
                      <img src={require('../img/guarantee3.png')} />
                    </b>
                    <div className='intro'>
                      <h4>支付担保交易</h4>
                      <p>支付款项由系统先行保管，验货OK后，</p><p>再确认付款到卖家账户，买家发起交易，</p><p>杜绝钓鱼网站。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'>收货&nbsp;·&nbsp;验货&nbsp;·&nbsp;满意再付款</div>
                  </li>
                </ul>
              </Tabs.TabPane>
              <Tabs.TabPane tab='留言' key='2'>
                <h2 align='left' style={{'marginBottom': 15 + 'px'}}><b>留言</b></h2>
              </Tabs.TabPane>
              <Tabs.TabPane tab='安全保证' key='3'>
                <h4 align='left' style={{'margin': '20px 0'}}><b>如遇到以下情况可能是诈骗行为：1.宝贝价格异常低；2.卖家要求QQ沟通；3.卖家要求直接汇款。 寻求防骗经验。</b></h4>
                <h2 align='left' style={{'marginBottom': 15 + 'px'}}><b>安全保证</b></h2>
                <ul className='guarantee'>
                  <li className='first'>
                    <b className='icon' >
                      <img src={require('../img/guarantee1.png')} />
                    </b>
                    <div className='intro'>
                      <h4>卖家实名认证</h4>
                      <p>交大二手卖家必备网络身份证；</p><p>经支付宝核实会员身份信息和银行账户信息。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'><span>真实&nbsp;·&nbsp;可靠&nbsp;·&nbsp;网络身份证</span></div>
                  </li>
                  <li className='second'>
                    <b className='icon' >
                      <img src={require('../img/guarantee2.png')} />
                    </b>
                    <div className='intro'>
                      <h4>专业团队支撑</h4>
                      <p>发现可疑卖家或商品，发起举报，</p><p>由安全部门专员介入处理交易出现纠纷，双方协</p><p>商不成，由专业的客服小二介入仲裁。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'>专业&nbsp;·&nbsp;精英&nbsp;·&nbsp;全方位支持</div>
                  </li>
                  <li className='third'>
                    <b className='icon' >
                      <img src={require('../img/guarantee3.png')} />
                    </b>
                    <div className='intro'>
                      <h4>支付担保交易</h4>
                      <p>支付款项由系统先行保管，验货OK后，</p><p>再确认付款到卖家账户，买家发起交易，</p><p>杜绝钓鱼网站。</p>
                    </div>
                    <b className='arrow'>
                      <img src={require('../img/arrow.jpg')} />
                    </b>
                    <div className='addon'>收货&nbsp;·&nbsp;验货&nbsp;·&nbsp;满意再付款</div>
                  </li>
                </ul>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={7}>
            <div id='J_OtherIdles' data-spm='2007.1000338.6' className='idle-box other-idles' >
              <h4 align='left'>卖家的其它闲置<span className='total' /></h4>
              <Link to='' target='_blank' className='more'>更多</Link>
              <div className='entity loading' />
              <ul className='album'>
                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/1001'>
                      <img src={require('../img/1.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/1'>
                      <img src={require('../img/' + this.id + '.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/2'>
                      <img src={require('../img/2.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/1001'>
                      <img src={require('../img/3.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/1001'>
                      <img src={require('../img/4.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='sh-pic80 item-pic'>
                    <Link to='/item/1001'>
                      <img src={require('../img/1.jpg')} />
                    </Link>
                  </div>
                  <div className='item-info'>
                    <p align='left'>
                    苹果6，九成新以上
                    </p>
                    <p className='price-block'>
                      <span className='price'>
                        <b>￥</b>
                        <em>1099.99</em>
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shoppingItemInfo: state.shoppingItemer.shoppingItemInfo,
  userProps: state.user.userProps,
  loginProps: state.user.loginProps,
  signinProps: state.user.signinProps
})

const mapDispatchToProps = dispatch => ({
  getShoppingItemInfo: theLoginProps => { dispatch(getShoppingItemInfo(theLoginProps)) },
  addToCart: theLoginProps => { dispatch(addToCart(theLoginProps)) },
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingItem)
