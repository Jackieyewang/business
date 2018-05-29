import React from 'react'
import './person.css'
export default class Xiaoxi extends React.Component {
  render () {
    return (
      <div id='Xiaoxi'>
        <div id='info'>
          <h2 align='middile' style={{'color': 'red'}}>协议更新</h2>
          <h2 align='left'>【敬请阅读】亲，服务协议有更新哦！</h2>
          <h2 align='left'>协议中有对您权利义务特别约定以及管辖约定等重要条款，我们已以粗体下划线的方式为您特别标注，您要重点阅读哦！</h2>
          <br />
          <h2 align='left'>【特别提示】如您继续使用我们的服务，表示您已充分阅读、理解并接受协议的全部内容。阅读协议的过程中，如果您有任何疑问，可向平台客服咨询。如您不同意协议中任何条款，您应立即停止使用服务。</h2>
          <a href='http://www.baidu.com'>《二手交易平台服务协议》</a>
          <br />
          <a href='http://www.baidu.com'>《支付服务协议》</a>
          <br />
          <a href='http://www.baidu.com'>《法律声明及隐私权政策》</a>
        </div>
      </div>
    )
  }
}
