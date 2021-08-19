import { FETCH_PULLS, FETCH_REPOS, 
  FETCH_USER, SET_SELECTED, 
  SET_TOKEN, 
  SET_USERNAME } from './actions';

export const initialState = {
  userName: '',
  selected: 'repos',
  userInfo: {},
  repos: [],
  pulls: [],
  token: ''
};

export const reducer = (state, action) => {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_SELECTED:
      return { ...state, selected: action.payload };
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_REPOS:
      return { ...state, repos: action.payload };
    case FETCH_PULLS:
      return { ...state, pulls: action.payload };
    default: 
      return state;
  }
};
