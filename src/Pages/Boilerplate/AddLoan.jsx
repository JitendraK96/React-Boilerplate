/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Services/UserContext';
import { v4 } from 'uuid';

function AddLoan() {
  const [pageLoader, setPageLoader] = useState(false);
  const [localUsers, setLocalUsers] = useState([]);
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    setLocalUsers(users);
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    const newLocalUser = [];
    for (let i = 0; i < localUsers.length; i += 1) {
      if (localUsers[i].uid === uid) {
        localUsers[i].loans.push({
          lid: v4(),
          description: event.target[0].value,
          quantity: event.target[1].value
        });
      }
      newLocalUser.push(localUsers[i]);
    }

    setLocalUsers(newLocalUser);
    setUsers(newLocalUser);
  }

  const search = useLocation().search;
  const uid = new URLSearchParams(search).get('uid');

  return (
    <div className='addloan'>
      {
        pageLoader ? <>LOADING DATA FOR PAGE 2.................</> : 
        <>
          <div>Add Loan for user {uid}</div>

          <form onSubmit={onSubmit}>
            <label>
              Description:
              <input type="text" />
            </label>
            <label>
              Quantity:
              <input type="number" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <NavLink to={'/page-two'}>
            GOTO PAGE 2
          </NavLink>
        </>
      }
    </div>
  );
};

export default AddLoan;