import React from 'react'
import { Row, Col, Card, Tabs, Radio } from 'antd'
import BackToTop from './BackToTop.js'
import { Link } from 'react-router-dom'
import Sliderbbb from './sliderbbb.js'
const { Meta } = Card
const TabPane = Tabs.TabPane

export default class Xiaoshuo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'top'
    }
  }
  handleModeChange = (e) => {
    const mode = e.target.value
    this.setState({ mode })
  }
  render () {
    const { mode } = this.state
    return (
      <div id='xiaoshuo'>
        <BackToTop />
        <Row>
          <Col span={11} offset={6} >
            <Sliderbbb />
          </Col>
        </Row>
        <Row>
          <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
            <Radio.Button value='top'>舒适</Radio.Button>
            <Radio.Button value='left'>时尚</Radio.Button>
          </Radio.Group>
        </Row>
        <Row gutter={220}>
          <Col >
            <Tabs
              defaultActiveKey='1'
              tabPosition={mode}
              style={{ height: 2200 }}
            >
              <TabPane tab='武侠' key='1'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row >
              </TabPane>
              <TabPane tab='奇幻' key='2'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='都市爱情' key='3'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='校园生活' key='4'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='军事战争' key='5'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='古风仙侠' key='6'> <Row gutter={250}>
                <Col span={3} offset={4}>
                  <Link to='/item/1000'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/1.jpg')} />}>
                      <Meta
                        title='beats'
                        description='$300' />
                    </Card>
                  </Link>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/2.jpg')} />}>
                      <Meta
                        title='iphone'
                        description='$1000' />
                    </Card>
                  </a>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/3.jpg')} />}>
                      <Meta
                        title='玩具小车'
                        description='$21000' />
                    </Card>
                  </a>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/4.jpg')} />}>
                      <Meta
                        title='鞋'
                        description='$100' />
                    </Card>
                  </a>
                </Col>
              </Row ></TabPane>
              <TabPane tab='历史传奇' key='7'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='文学经典' key='8'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='乡村故事' key='9'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='灵异鬼怪' key='10'>
                <Row gutter={250}>
                  <Col span={3} offset={4}>
                    <Link to='/item/1000'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/1.jpg')} />}>
                        <Meta
                          title='beats'
                          description='$300' />
                      </Card>
                    </Link>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/2.jpg')} />}>
                        <Meta
                          title='iphone'
                          description='$1000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/3.jpg')} />}>
                        <Meta
                          title='玩具小车'
                          description='$21000' />
                      </Card>
                    </a>
                  </Col>
                  <Col span={3}>
                    <a href='https://www.baidu.com/'>
                      <Card
                        hoverable
                        style={{ width: 210 }}
                        cover={<img alt='s' src={require('../img/4.jpg')} />}>
                        <Meta
                          title='鞋'
                          description='$100' />
                      </Card>
                    </a>
                  </Col>
                </Row ></TabPane>
              <TabPane tab='悬疑推理' key='11'> <Row gutter={250}>
                <Col span={3} offset={4}>
                  <Link to='/item/1000'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/1.jpg')} />}>
                      <Meta
                        title='beats'
                        description='$300' />
                    </Card>
                  </Link>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/2.jpg')} />}>
                      <Meta
                        title='iphone'
                        description='$1000' />
                    </Card>
                  </a>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/3.jpg')} />}>
                      <Meta
                        title='玩具小车'
                        description='$21000' />
                    </Card>
                  </a>
                </Col>
                <Col span={3}>
                  <a href='https://www.baidu.com/'>
                    <Card
                      hoverable
                      style={{ width: 210 }}
                      cover={<img alt='s' src={require('../img/4.jpg')} />}>
                      <Meta
                        title='鞋'
                        description='$100' />
                    </Card>
                  </a>
                </Col>
              </Row ></TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}
