import React from 'react'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card

class Bodyblow2 extends React.Component {
    handleClick = () => {

    }
    render () {
      return (
        <div>
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
        </div>
      )
    }
}
export default class Bodyblow extends React.Component {
  render () {
    return (
      <div>
        <Row gutter={90}>
          <Col span={5} offset={2}>
            <img id='logo1' src={require('../img/timg.jpg')} />
          </Col>
        </Row>
        <Row>
          <Col span={3} offset={3}>
            <img id='youhaohuo' src={require('../img/youhaohuo.png')} />
          </Col>
        </Row>
        <Row>
          <Bodyblow2 />
        </Row>
      </div>

    )
  }
}
