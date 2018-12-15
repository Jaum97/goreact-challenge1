import React, { Component } from 'react';

export default class PostHeader extends Component {
  state = {
    userName,
    postTime,
    userAvatar,
  };

  static defaultProps = {
    userName: 'Name',
    postTime: Date(),
    // userAvatar ",",
  };

  static propTypes = {
    userName: propTypes.String,
    // userAvatar: propTypes.String,
    postTime: propTypes.Date,
  };

  render() {
    return (
      <div className="post-header">
        <img src="">avatar</img>
        <br />
        <strong>{this.state.userName}</strong>
        <br />
        <span>{this.state.postTime}</span>
      </div>
    );
  }
}
