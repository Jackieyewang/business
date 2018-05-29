import React from 'react'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card

class Bodyblowhot extends React.Component {
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
            <p>hhhhhhhh</p>
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
export default class Hot extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={3} offset={4}>
            <img id='youhaohuo' src={require('../img/youhaohuo.png')} />
          </Col>
        </Row>
        <Row>
          <Bodyblowhot />
        </Row>
      </div>

    )
  }
}
