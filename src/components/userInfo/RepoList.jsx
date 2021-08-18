/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

const RepoList = ({ repos }) => {
  const repoElements = repos.map(repo => ( 
    <li key={repo.id}>
      <Item {...repo} />
    </li>
  ));
  return   <>
    <h1>Repositories</h1>
    <ul>{repoElements}</ul>
  </>;
};

export default RepoList;
