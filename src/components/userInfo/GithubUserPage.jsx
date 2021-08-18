import React from 'react';
import UserInfo from './UserInfoItem';
import UserInput from './UserInput';
import { fetchUser } from '../services/githubApi';
import { useDispatch } from '../../state/ReduxProvider';
import { getUser } from '../../state/actions';
const GithubUserPage = () => {
  const dispatch = useDispatch();
  const handleSetUser = async (userName) => {
    const user = await fetchUser(userName);
    dispatch(getUser(user));
  }; 

  return (
    <>
      <UserInput 
        onSetUser={handleSetUser}
      />  
      {/* <UserInfo /> */}
      {/* <UserRepos/> */}
    </>
  );
};

export default GithubUserPage;
