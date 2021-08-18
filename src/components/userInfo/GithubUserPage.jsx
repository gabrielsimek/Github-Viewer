import React from 'react';
import UserInfo from './UserInfoItem';
import UserInput from './UserInput';
import { fetchRepos, fetchUser } from '../services/githubApi';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { getRepos, getUser } from '../../state/actions';
import { selectUser, selectRepos } from '../../state/selectors.js';
import RepoList from './RepoList';
const GithubUserPage = () => {
  const user = useSelector(selectUser);
  const repos = useSelector(selectRepos);
  const dispatch = useDispatch();
  
  const handleSetUser = async (userName) => {
    const user = await fetchUser(userName);
    dispatch(getUser(user));
    const repos = await fetchRepos(userName);
    dispatch(getRepos(repos));
  }; 

  //when user entered, 

  return (
    <>
      <UserInput 
        onSetUser={handleSetUser}
      />  
      <UserInfo 
        {...user}
      />
      <RepoList
        repos={repos}
      />
    </>
  );
};

export default GithubUserPage;
