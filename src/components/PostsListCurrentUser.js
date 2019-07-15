import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../userActions';

export default class PostsListCurrentUser extends Component {
  render() {
    return (
      <div>
        Hello from Current User Posts
      </div>
    )
  }
}


