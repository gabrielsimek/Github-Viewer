import React, { useState } from 'react';
import { setSelected, setUserName } from '../../state/actions';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectRepos, selectSelected } from '../../state/selectors';

const UserInput = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);
  const repos = useSelector(selectRepos);
  const [formUserName, setFormUserName] = useState('');
  // const [tokenLocal, setTokenLocal] = useState('');
  const onUserChange = ({ target }) => {
    setFormUserName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(formUserName));
  };

  const onSelectChange = ({ target }) => {
    dispatch(setSelected(target.value));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-input">
          <input 
            id="user-input"
            type="text"
            value={formUserName}
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
        { repos.length > 1  && <option  value="pulls">Pulls</option>}
      </select>
    </>
  );
};

export default UserInput;
