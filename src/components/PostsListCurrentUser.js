import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../userActions';
import { fetchMyPosts } from '../myPostsActions';

export class PostsListCurrentUser extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchUsers());
      this.props.dispatch(fetchMyPosts());
      console.log("I am left props:", this.props)
    }
  }

  render() {
    const { error, loading, users, myPosts } = this.props;
    let currentUser;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }
    if (users) {
      currentUser = users[0]
    }

    return (
      <div className="posts-list-current-user">
        {myPosts && myPosts.map(post => (
            <div key={post.id} className="border my-1 p-2">
              <div><small>By: {currentUser.name}</small></div>
              <h5><strong>{post.title}</strong></h5>
              <div>{post.body}</div>
            </div>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  myPosts: state.myPosts.items,
  loading: state.users.loading,
  error: state.users.error
})

export default connect(mapStateToProps)(PostsListCurrentUser);
