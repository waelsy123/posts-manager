import React, { Component } from 'react';
import { getPost, getUser } from '../../model/callApi';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
      userName: null
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    getPost(postId, post => getUser(post.userId, user => {
      this.setState({
        userName: user.name,
        title: post.title,
        body: post.body
        
      })
    }))
  }

  render() {
    return (
      <div className="post">
        <div className="post-title">{this.state.title}</div>
        <div className="post-author">{this.state.userName}</div>
        <div className="post-description">{this.state.body}</div>
      </div>
    );
  }
}

export default Post;
