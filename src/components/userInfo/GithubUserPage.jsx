/* eslint-disable max-len */
import React, { useEffect } from 'react';
import UserInfo from './UserInfoItem';
import UserInput from './UserInput';
import { fetchPulls, fetchRepos, fetchUser } from '../services/githubApi';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { getPulls, getRepos, getUser } from '../../state/actions';
import { selectUser, selectRepos, selectUserName, selectSelected, selectPulls } from '../../state/selectors.js';
import RepoList from './RepoList';
import PullList from './PullList';
const GithubUserPage = () => {
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const selected = useSelector(selectSelected);
  const repos = useSelector(selectRepos);
  const pulls = useSelector(selectPulls);
  const dispatch = useDispatch();

  useEffect(async () => {
    if(userName) {
      const user = await fetchUser(userName);
      dispatch(getUser(user));
      if(selected === 'repos') {
        const repos = await fetchRepos(userName);
        dispatch(getRepos(repos));
      } else if(selected === 'pulls') {
        const pulls = await fetchPulls(process.env.GITHUB_TOKEN, userName, repos);
        dispatch(getPulls(pulls));
      }
    }
  }, [userName, selected]);
  // const handleSetUser = async (userName) => {
  //   
  //   const repos = await fetchRepos(userName);
  //   dispatch(getRepos(repos));
  // }; 

  // const doSomething =  () => {
  //   fetchPulls(process.env.GITHUB_TOKEN, 
  //     'gabrielsimek', 
  //     repos)
  //     .then(res => console.log(res));
  // };

  //when user entered, 

  return (

    <>

      <UserInput 
      />  
      <UserInfo 
        {...user}
      />
      { selected === 'repos' && <RepoList
        repos={repos}
      />}
      { selected === 'pulls' && <PullList 
        pulls={pulls}
      />}
    </>
  );
};

export default GithubUserPage;
