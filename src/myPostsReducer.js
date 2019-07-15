import {
  FETCH_MY_POSTS_BEGIN,
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MY_POSTS_FAILURE
} from "./myPostsActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function myPostsReducer(
    state = initialState,
    action
  ) {
  switch (action.type) {
    case FETCH_MY_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MY_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      };
    case FETCH_MY_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
