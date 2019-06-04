import React, { Component, Fragment } from 'react';



class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ inline: 'end', behavior: "smooth" });
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <div className={this.props.content.id ? 'talkbubble-1 messages' : "talkbubble-2 messages"}>
          <p ref={(el) => { this.messagesEnd = el; }}>{this.props.content.content}</p>
        </div>
      </Fragment>
    )
  }
}

export default Message;
