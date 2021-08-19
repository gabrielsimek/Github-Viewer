import React from 'react';

const Item = ({ name, html_url, created_at, updated_at }) => {
  return (
    <div>
      <h3>{name}</h3> 
      <a href={html_url} target={'_blank'} rel="noreferrer">{html_url}</a>
      <p>Created At {created_at}</p>
      <p>Updated At: {updated_at}</p>
    </div>
  );
};

export default Item;
