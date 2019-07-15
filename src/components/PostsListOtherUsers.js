import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../postActions';

export class PostsListOtherUsers extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchPosts());
    }
  }

  render() {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    function returnAuthorName(postUserId) {
      if (postUserId === 2) {
        return "Ervin Howell"
      } else if (postUserId === 3) {
        return "Clementine Bauch"
      } else {
        return "Leanne Graham"
      }
    }
    function returnVisiblePost(post) {
      if (post.userId === 1) {
        return null
      } else {
        return (
          <div key={post.id} className="border my-1 p-2">
            <div><small>By: {returnAuthorName(post.userId)}</small></div>
            <h5><strong>{post.title}</strong></h5>
            <div>{post.body}</div>
          </div>
        )
      }
    }

    return (
      <div className="posts-list-other-users">
        {posts && posts.map(post => {
          return returnVisiblePost(post)
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error
})

export default connect(mapStateToProps)(PostsListOtherUsers);
