import { FETCH_USER } from './actions';

export const initialState = {
  userInfo: {},
  userRepos: []
};

export const reducer = (state, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    default: 
      return state;
  }
};
