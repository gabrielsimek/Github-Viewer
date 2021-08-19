export const SET_USERNAME = 'SET-USERNAME';
export const SET_TOKEN = 'SET-TOKEN';
export const SET_SELECTED = 'SET-SELECTED';
export const FETCH_USER = 'FETCH-USER';
export const FETCH_REPOS = 'FETCH-REPOS';
export const FETCH_PULLS = 'FETCH-PULLS';
export const SET_FILTER = 'SET_FILTER';

export const setUserName = (userName) => {
  return {
    type: SET_USERNAME,
    payload: userName
  };
};
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  };
};
export const setSelected = (selected) => {
  return {
    type: SET_SELECTED,
    payload: selected
  };
};
export const getUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user
  };
};
export const getRepos = (repos) => {
  return {
    type: FETCH_REPOS,
    payload: repos
  };
};
export const getPulls = (pulls) => {
  return {
    type: FETCH_PULLS,
    payload: pulls
  };
};
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};
