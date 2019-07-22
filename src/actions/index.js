import {
  SELECT_USER,
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  RECEIVE_USERDATA_ERROR,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  RECEIVE_REPOS_ERROR,
} from './types';

export function selectUser() { var user='ss'
  return {
      type: SELECT_USER,
      user,
  };
}

export function requestUserData() {
  return {
      type: REQUEST_USERDATA,
  };
}

function receiveUserData(json) {
  return {
      type: RECEIVE_USERDATA,
      userData: json,
  };
}

function receiveUserDataErr(error) {
  return {
      type: RECEIVE_USERDATA_ERROR,
      error,
  };
}

function requestRepos() {
  return {
      type: REQUEST_REPOS,
  };
}

function receiveRepos(json) {console.log(json)
  return {
      type: RECEIVE_REPOS,
      repos: json,
  };
}

function receiveReposErr(error) {
  return {
      type: RECEIVE_REPOS_ERROR,
      error,
  };
}

export function fetchUserData(user) {var user='ss'
  return dispatch => {
      dispatch(requestUserData());
     // return fetch(`https://api.github.com/users/${user}`)
      //return fetch(`http://dummy.restapiexample.com/api/v1/employees`)
      return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(json => dispatch(receiveUserData(json)))
          .catch(err => dispatch(receiveUserDataErr(err)));
  };
}

function fetchRepos() {var user='ss'
  return dispatch => {
      dispatch(requestRepos());
      return fetch(`https://api.github.com/users/${user}/repos`)
          .then(res => res.json())
          .then(json => dispatch(receiveRepos(json)))
          .catch(err => dispatch(receiveReposErr(err)));
  };
}

export function fetchUserAndRepos(user) {
  return (dispatch, getState) => {
      return dispatch(fetchUserData(user)).then(() => {
          const { currentUserData } = getState();
          if (
              !currentUserData.isFetching &&
              currentUserData.userData.message
          ) {
              return;
          }
          return dispatch(fetchUserData(user));
      });
  };
}
