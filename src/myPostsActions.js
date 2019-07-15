function getMyPosts(dispatch) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
    .then(res => res.json())
    .then(posts => {
      console.log("I am myPosts:", posts)
      return { posts }
    })
}

export function fetchMyPosts() {
  return dispatch => {
    dispatch(fetchMyPostsBegin());
    return getMyPosts(dispatch)
      .then(json => {
        dispatch(fetchMyPostsSuccess(json.posts));
        return json.posts;
      })
      .catch(error =>
        dispatch(fetchMyPostsFailure(error))
      );
  };
}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_MY_POSTS_BEGIN = "FETCH_MY_POSTS_BEGIN";
export const FETCH_MY_POSTS_SUCCESS = "FETCH_MY_POSTS_SUCCESS";
export const FETCH_MY_POSTS_FAILURE = "FETCH_MY_POSTS_FAILURE";

export const fetchMyPostsBegin = () => ({
  type: FETCH_MY_POSTS_BEGIN
})

export const fetchMyPostsSuccess = posts => ({
  type: FETCH_MY_POSTS_SUCCESS,
  payload: { posts }
})

export const fetchMyPostsFailure = error => ({
  type: FETCH_MY_POSTS_FAILURE
})
