import React from 'react'
import {Carousel} from 'antd'

export default class Sliderbbb extends React.Component {
  render () {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      autoplay: true
    }
    return (
      <div id='Sliderbbb'>
        <Carousel {...settings}>
          <div><img id='sliderbbb1' src={require('../img/sliderbbb1.jpg')} /></div>
          <div><img id='sliderbbb2' src={require('../img/sliderbbb2.jpg')} /></div>
          <div><img id='sliderbbb3' src={require('../img/sliderbbb3.jpg')} /></div>
          <div><img id='sliderbbb4' src={require('../img/sliderbbb4.jpg')} /></div>
        </Carousel>
      </div>
    )
  }
}
