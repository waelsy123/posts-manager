import { getAllPosts } from "../../model/callApi";
import React, { Component } from 'react';
import { ROUTE_TO_POSTS } from '../../constants/routes';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getAllPosts((posts) => this.setState({ posts }));
  }

  handleViewPost = (postId) => () => {
    this.props.history.push(`${ROUTE_TO_POSTS}/${postId}`);
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <p key={post.id} className="App-intro" onClick={this.handleViewPost(post.id)}>
            {post.title}
          </p>
        ))}
      </div>
    );
  }
}

export default Homepage;