import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Messages extends Component {
  // 组件更新时监控窗口滚动条，保持其在最下
  componentDidUpdate () {
    const messageList = ReactDOM.findDOMNode(this.refs.messages)
    window.scrollTo(0, messageList.clientHeight + 50)
  }
  render () {
    const myId = this.Props.myId

    // 每条消息，判断是否是自己
    const oneMessage = this.Props.messages.map(function (message) {
      return (
        <Message key={message.msgId} msgType={message.type} msgUser={message.username} action={message.action} isMe={(myId === message.uid)} time={message.time} />
      )
    })
    return (<div className='messages' ref='messages'>{oneMessage}</div>)
  }
}

class Message extends Component {
  render () {
    if (this.Props.msgType === 'system') {
      // 系统消息
      return (
        <div className='one-message system-message'>
          {this.Props.msgUser} {(this.Props.action === 'login') ? '进入了聊天室' : '离开了聊天室'} <span className='time'>&nbsp;{this.Props.time}</span>
        </div>
      )
    } else {
      // 聊天消息，判断是否是自己
      return (
        <div className={(this.Props.isMe) ? 'me one-message' : 'other one-message'}>
          <p className='time'><span>{this.Props.msgUser}</span> {this.Props.time}</p>
          <div className='message-content'>{this.Props.action}</div>
        </div>
      )
    }
  }
}
