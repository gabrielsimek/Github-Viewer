/* eslint-disable max-len */
import React, { useEffect } from 'react';
import UserInfo from './UserInfo';
import UserInput from './UserInput';
import { fetchPulls, fetchRepos, fetchUser } from '../services/githubApi';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { getPulls, getRepos, getUser, setFilter } from '../../state/actions';
import { selectUser, selectRepos, selectUserName, selectSelected, selectPulls, selectStatus, selectFilter } from '../../state/selectors.js';
import RepoList from './RepoList';
import PullList from './PullList';

const GithubUserPage = () => {
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const selected = useSelector(selectSelected);
  const repos = useSelector(selectRepos);
  const pulls = useSelector(selectPulls);
  const filter = useSelector(selectFilter)

  const dispatch = useDispatch();
 
  useEffect(() => {
    getUserAndSelected(userName, selected);
  }, [userName, selected]);
  
  //function 
  const getUserAndSelected = async (_userName, _selected) => {
    if(_userName) {    
      const user = await fetchUser(_userName);
      dispatch(getUser(user));
      if(_selected === 'repos' && repos.length < 1) {
        const repos = await fetchRepos(_userName);
        dispatch(getRepos(repos));
      } else if(_selected === 'pulls' && pulls.length < 1) {
        const pulls = await fetchPulls(process.env.GITHUB_TOKEN, _userName, repos);
        dispatch(getPulls(pulls));
      }
    }
  };
  //move to utils

  return (
    <>
      <UserInput />
      { userName && <UserInfo 
        {...user}
      />}
      {(selected === 'repos' && repos.length > 1) && <RepoList
        repos={repos}
      />}
      { selected === 'pulls' && <PullList 
        filter={filter}
        pulls={pulls}
      />}
    </>
  );
};

export default GithubUserPage;
