/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

const PullList = ({ pulls }) => {
  const pullElements = pulls.map(pull => ( 
    <li key={pull.id}>
    
      <Item {...pull} />
    </li>
  ));
  return (
    <>
      <h1>Pull Requests</h1>
      <ul>{pullElements}</ul>
    </>
  );
};

export default PullList;
