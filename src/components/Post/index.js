import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader/index';
import './styles.scss';

const Post = props => (
  <div className="post">
    <PostHeader
      userAvatar={props.data.userAvatar}
      userName={props.data.userName}
      postTime={props.data.postTime}
    />
    <p>{props.data.postBody}</p>
  </div>
);

// { userName, postTime, userAvatar, postBody } = props.data

Post.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
