import React, { useState } from 'react';
import { setSelected, setUserName } from '../../state/actions';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectSelected } from '../../state/selectors';

const UserInput = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);
  const [userNameLocal, setUserNameLocal] = useState('');
  const onUserChange = ({ target }) => {
    setUserNameLocal(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(userNameLocal));
  };

  const onSelectChange = ({ target }) => {
    dispatch(setSelected(target.value));
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="user-input">
          <input 
            id="user-input"
            type="text"
            value={userNameLocal}
            onChange={onUserChange}
          />
        </label>  
        <button>Go</button> 
      </form>
      <label htmlFor="select">select</label>
      <select 
        onChange={onSelectChange}
        name="select" 
        id="select"
        value={selected}
      >
        <option value="repos">Repos</option>
        <option  value="pulls">Pulls</option>
      </select>
    </>
  );
};

export default UserInput;
