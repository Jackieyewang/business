import React from 'react'
import {Carousel} from 'antd'

export default class BodySliderPC extends React.Component {
  render () {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      autoplay: true
    }
    return (
      <div id='BodySliderPC'>
        <Carousel {...settings}>
          <div><img alt='slider' src={require('../img/slider1.jpg')} /></div>
          <div><img alt='slider' src={require('../img/slider2.jpg')} /></div>
          <div><img alt='slider' src={require('../img/slider3.jpg')} /></div>
          <div><img alt='slider' src={require('../img/slider4.jpg')} /></div>
        </Carousel>
      </div>
    )
  }
}
