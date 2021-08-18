import React from 'react';
import PropTypes from 'prop-types';
const UserInfo = ({ name, followers, following }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>following: {following} | followers: {followers}</p>
    </div>


  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired 
};

export default UserInfo;
