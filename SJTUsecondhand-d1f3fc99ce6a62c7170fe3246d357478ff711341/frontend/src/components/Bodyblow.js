import React from 'react'
import { Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card

class Bodyblowroot extends React.Component {
    handleClick = () => {

    }
    render () {
      return (
        <div>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/1'>
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
              <Link to='/item/2'>
                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/2.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/3'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/3.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/4'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/4.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
            </Col>
          </Row >
          <Row><Col span={80}>-</Col></Row>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/5'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/5.jpg')} />}>
                  <Meta
                    title='书'
                    description='$210' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/6'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/6.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/7'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/7.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/8'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/8.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
            </Col>
          </Row >
          <Row><Col span={80}>-</Col></Row>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/5'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/5.jpg')} />}>
                  <Meta
                    title='书'
                    description='$210' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/6'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/6.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/7'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/7.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/12'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/8.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
            </Col>
          </Row >
          <Row><Col span={80}>-</Col></Row>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/5'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/5.jpg')} />}>
                  <Meta
                    title='书'
                    description='$210' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/6.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/7.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/8.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
            </Col>
          </Row >
          <Row><Col span={80}>-</Col></Row>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/5.jpg')} />}>
                  <Meta
                    title='书'
                    description='$210' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/6.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/7.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/8.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
            </Col>
          </Row >
          <Row><Col span={80}>-</Col></Row>
          <Row gutter={250}>
            <Col span={3} offset={4}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/5.jpg')} />}>
                  <Meta
                    title='书'
                    description='$210' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/6.jpg')} />}>
                  <Meta
                    title='iphone'
                    description='$1000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/7.jpg')} />}>
                  <Meta
                    title='玩具小车'
                    description='$21000' />
                </Card>
              </Link>
            </Col>
            <Col span={3}>
              <Link to='/item/1000'>

                <Card
                  hoverable
                  style={{ width: 210 }}
                  cover={<img alt='s' src={require('../img/8.jpg')} />}>
                  <Meta
                    title='鞋'
                    description='$100' />
                </Card>
              </Link>
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
        <Row gutter={50}>
          <Col span={3} offset={1}>
            <img id='youhaohuo' src={require('../img/youhaohuo.png')} />
          </Col>
        </Row>
        <Row>
          <Bodyblowroot />
        </Row>
      </div>

    )
  }
}
