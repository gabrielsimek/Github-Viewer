/* eslint-disable react/prop-types */
import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  console.log(repos);
  //   const repos = [];
  const repoElements = repos.map(repo =>( 
    <li key={repo.id}>
      <RepoItem {...repo} />
    </li>
  ));
  console.log(repoElements);
  return <ul>{repoElements}</ul>;
};

export default RepoList;
