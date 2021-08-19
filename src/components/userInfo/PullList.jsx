/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

const PullList = ({ pulls, filter }) => {
  let filteredPulls;
  if(filter === 'open') filteredPulls = pulls.filter(pull => pull.state === 'open');
  else if (filter === 'closed') filteredPulls = pulls.filter(pull => pull.state === 'closed')
  else filteredPulls = [...pulls]

  const pullElements = filteredPulls.map(pull => ( 
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
