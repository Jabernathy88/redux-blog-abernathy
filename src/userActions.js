function fakeGetUsers() {
  return new Promise(resolve => {

    setTimeout(
      () =>
        resolve({
          users: [
            // hard-coded examples at api
            {
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "Sincere@april.biz"
          },
            {
              id: 2,
              name: "Ervin Howell",
              username: "Antonette",
              email: "Shanna@melissa.tv"
            },
            {
              id: 3,
              name: "Clementine Bauch",
              username: "Samantha",
              email: "Nathan@yesenia.net"
            }
          ]
        })
        , 300 // timeout for testing
    );
  });
}

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fakeGetUsers()
      .then(json => {
        dispatch(fetchUsersSuccess(json.users));
        return json.users;
      })
      .catch(error =>
        dispatch(fetchUsersFailure(error))
      );
  };
}

export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
})

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
})

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE
})
