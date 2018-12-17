import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PostHeader = props => (
  // {userName, postTime, userAvatar} = props.data
  <div className="post-header">
    <img src={props.data.userAvatar} alt="userAvatar" />
    <div className="container">
      <strong>{props.data.userName}</strong>
      <span>{props.data.postTime}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
};

export default PostHeader;
