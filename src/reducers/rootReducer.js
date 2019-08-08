import { combineReducers } from 'redux';
import users from '../userReducer';
import posts from '../postReducer';
import myPosts from '../myPostsReducer';

export default combineReducers({
  users,
  posts,
  myPosts
})
