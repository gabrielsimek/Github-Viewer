import { FETCH_REPOS, FETCH_USER } from './actions';

export const initialState = {
  userInfo: {},
  repos: []
};

export const reducer = (state, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_REPOS:
      return { ...state, repos: action.payload };
    default: 
      return state;
  }
};
