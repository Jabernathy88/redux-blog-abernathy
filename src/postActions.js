// function getPosts() {
//   return fetch("/posts")
//     .then(handleErrors)
//     .then(res => res.json());
// }

function fakeGetPosts(dispatch) {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => {
      console.log("I am posts:", posts)
      return { posts }
    })
}

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fakeGetPosts(dispatch)
    .then(json => {
      dispatch(fetchPostsSuccess(json.posts));
      return json.posts;
    })
    .catch(error => 
      dispatch(fetchPostsFailure(error))
    );
  };
}

// handle HTTP errors // TODO: REMOVE
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
})

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
})

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE
})
