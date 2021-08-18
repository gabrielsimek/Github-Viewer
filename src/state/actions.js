export const FETCH_USER = 'FETCH-USER';
export const FETCH_REPOS = 'FETCH-REPOS';
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
