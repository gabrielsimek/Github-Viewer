import React from 'react';

const RepoItem = ({ name, html_url, created_at, updated_at }) => {
  console.log(html_url);
  return (
    <div>
      <h3>{name}</h3> 
      <a href={html_url} target={'_blank'} rel="noreferrer">Link</a>
      <p>Created At {created_at}</p>
      <p>Updated At: {updated_at}</p>
    </div>
  );
};

export default RepoItem;
