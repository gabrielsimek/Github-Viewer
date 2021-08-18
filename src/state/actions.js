export const SET_USERNAME = 'SET-USERNAME';
export const SET_SELECTED = 'SET-SELECTED';
export const FETCH_USER = 'FETCH-USER';
export const FETCH_REPOS = 'FETCH-REPOS';
export const FETCH_PULLS = 'FETCH-PULLS';

export const setUserName = (userName) => {
  return {
    type: SET_USERNAME,
    payload: userName
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
