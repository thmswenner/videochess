import React, { Component } from 'react';
import Message from './Message.js';
import Chatbar from './Chatbar.js';



class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


render() {
  const list = this.props.messages.map(e => {
    return <Message
      id="new-msg"
      key = { e.id }
      content = { e }
    />
  })

    return (
      <div className="chat-container">
        <div className="message-area">
          {list}
        </div>
      <Chatbar addNewMessage={this.props.addNewMessage} />
    </div>
    )
  }
}

export default Chat;
