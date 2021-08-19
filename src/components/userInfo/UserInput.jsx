import React, { useState } from "react";
import { setFilter, setSelected, setUserName } from "../../state/actions";
import { useDispatch, useSelector } from "../../state/ReduxProvider";
import { selectFilter, selectRepos, selectSelected } from "../../state/selectors";

const UserInput = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);
  const repos = useSelector(selectRepos);
  const filter = useSelector(selectFilter)
  console.log(filter);
  const [formUserName, setFormUserName] = useState("");
  // const [tokenLocal, setTokenLocal] = useState('');
  const onUserChange = ({ target }) => {
    setFormUserName(target.value);
  };

  const onStatusChange = ({target}) => {
      dispatch(setFilter(target.value))
  }

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
        {repos.length > 1 && <option value="pulls">Pulls</option>}
      </select>

      { selected === 'pulls' && <div>
      <span>PR status:</span>

      <input
        selected
        id="open"
        type="radio"
        name="pull-state"
        value="open"
        onChange={onStatusChange}
        checked={filter === 'open'}
      />
      <label htmlFor="open">open</label>

      <input
        id="all"
        type="radio"
        name="pull-state"
        value="all"
        onChange={onStatusChange}
        checked={filter === 'all'}

      />
      <label htmlFor="all">all</label>

      <input
        id="closed"
        type="radio"
        name="pull-state"
        value="closed"
        onChange={onStatusChange}
        checked={filter === 'closed'}

      />
      <label htmlFor="closed">closed</label>
      </div>}
   
    </>
  );
};

export default UserInput;
