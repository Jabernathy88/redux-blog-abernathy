import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../userActions';

export class PostsListCurrentUser extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchUsers());
    }
  }

  render() {
    const { error, loading, users } = this.props;

    const currentUser = users[0]

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="posts-list-current-user">
        Hello from Current User Posts
        {users && users.map(user => (
          <div key={user.id}>
            <p><small>User #{user.id}:</small></p>
            <p><strong>{user.name}</strong></p>
          </div>
        ))}
        { // temp log
          currentUser && console.log("I am current user:", currentUser)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
  error: state.users.error
})

export default connect(mapStateToProps)(PostsListCurrentUser);
