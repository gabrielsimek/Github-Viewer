import React, { useState } from 'react';

const UserInput = ({ onSetUser }) => {
  const [userName, setUserName] = useState('');
  const onChange = ({ target }) => {
    setUserName(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSetUser(userName);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="user-input">
        <input 
          id="user-input"
          type="text"
          value={userName}
          onChange={onChange}
        />
      </label>  
      <button>Go</button> 
    </form>
  );
};

export default UserInput;
