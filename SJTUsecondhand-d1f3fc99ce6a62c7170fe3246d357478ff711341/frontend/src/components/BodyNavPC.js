import React from 'react'
import { Link } from 'react-router-dom'
// import BackToTop from './BackToTop.js'
import {Menu, Icon} from 'antd'

export default class BodyNavPC extends React.Component {
    handleClick = () => {

    }
    render () {
      return (
        <div id='BodyNavPC'>
          <Menu
            mode='vertical'
            onClick={this.handleClick}
            style={{width: 100 + '%'}}
          >
            <Menu.SubMenu key='sub0' title={<span><Icon type='appstore' /><span>书籍</span></span>}>
              <Menu.Item key={0}>
                <Link to='/xiaoshuo/'>小说</Link>
              </Menu.Item>
              <Menu.Item key={1}>
                <Link to='/kaoshi/'>考试</Link>
              </Menu.Item>
              <Menu.Item key={2}>
                            外语
              </Menu.Item>
              <Menu.Item key={3}>
                            教材
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub1' title={<span><Icon type='appstore' /><span>文具</span></span>}>
              <Menu.Item key={4}>
                            钢笔
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub2' title={<span><Icon type='appstore' /><span>服装</span></span>}>
              <Menu.Item key={5}>
                            男装
              </Menu.Item>
              <Menu.Item key={6}>
                            女装
              </Menu.Item>
              <Menu.Item key={7}>
                            男鞋
              </Menu.Item>
              <Menu.Item key={8}>
                            女鞋
              </Menu.Item>
              <Menu.Item key={9}>
                            帽子
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub3' title={<span><Icon type='appstore' /><span>鞋靴</span></span>}>
              <Menu.Item key={10}>
                            运动
              </Menu.Item>
              <Menu.Item key={11}>
                            休闲
              </Menu.Item>
              <Menu.Item key={12}>
                            皮鞋
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub12' title={<span><Icon type='appstore' /><span>箱包</span></span>} >
              <Menu.Item key={13}>
                            旅行箱
              </Menu.Item>
              <Menu.Item key={14}>
                            书包
              </Menu.Item>
              <Menu.Item key={15}>
                            钱包
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub4' title={<span><Icon type='appstore' /><span>数码</span></span>}>
              <Menu.Item key={16}>
                            电脑
              </Menu.Item>
              <Menu.Item key={17}>
                            手机
              </Menu.Item>
              <Menu.Item key={18}>
                            平板
              </Menu.Item>
              <Menu.Item key={19}>
                            相机
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub5' title={<span><Icon type='appstore' /><span>乐器</span></span>}>
              <Menu.Item key={20}>
                            笛子
              </Menu.Item>
              <Menu.Item key={21}>
                            吉他
              </Menu.Item>
              <Menu.Item key={22}>
                            萨克斯
              </Menu.Item>
              <Menu.Item key={23}>
                            口琴
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub6' title={<span><Icon type='appstore' /><span>美妆</span></span>} >
              <Menu.Item key={24}>
                            洗面奶
              </Menu.Item>
              <Menu.Item key={25}>
                            面膜
              </Menu.Item>
              <Menu.Item key={26}>
                            口红
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub7' title={<span><Icon type='appstore' /><span>交通</span></span>} >
              <Menu.Item key={27}>
                            滑板
              </Menu.Item>
              <Menu.Item key={28}>
                            自行车
              </Menu.Item>
              <Menu.Item key={29}>
                            电瓶车
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub8' title={<span><Icon type='appstore' /><span>交通</span></span>} >
              <Menu.Item key={27}>
                            滑板
              </Menu.Item>
              <Menu.Item key={28}>
                            自行车
              </Menu.Item>
              <Menu.Item key={29}>
                            电瓶车
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub9' title={<span><Icon type='appstore' /><span>交通</span></span>} >
              <Menu.Item key={27}>
                            滑板
              </Menu.Item>
              <Menu.Item key={28}>
                            自行车
              </Menu.Item>
              <Menu.Item key={29}>
                            电瓶车
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub10' title={<span><Icon type='appstore' /><span>交通</span></span>} >
              <Menu.Item key={27}>
                            滑板
              </Menu.Item>
              <Menu.Item key={28}>
                            自行车
              </Menu.Item>
              <Menu.Item key={29}>
                            电瓶车
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key='sub11' title={<span><Icon type='appstore' /><span>交通</span></span>} >
              <Menu.Item key={27}>
                            滑板
              </Menu.Item>
              <Menu.Item key={28}>
                            自行车
              </Menu.Item>
              <Menu.Item key={29}>
                            电瓶车
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      )
    }
}
