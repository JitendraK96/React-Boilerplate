/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { UserContext } from '../../Services/UserContext'

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

function PageOne ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [pageLoader, setPageLoader] = useState(false);
  const [localUsers, setLocalUsers] = useState([]);
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    setLocalUsers(users);
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    const userObj = {
      uid: v4(),
      name: event.target[0].value,
      loans: [],
    };
    const newLocalUsers = localUsers.concat([userObj]);

    setLocalUsers(newLocalUsers);
    setUsers(newLocalUsers);
  }

  console.log(localUsers ? localUsers.length : 0, 'HEY', localUsers);
  return (
    <div className='pageone'>
      {
        pageLoader ? <>LOADING DATA FOR PAGE 1.................</> : 
        <>
          <div>PAGE 1 - Users In DB Are: {localUsers.length}</div>

          <form onSubmit={onSubmit}>
            <label>
              NAME:
              <input type="text" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <NavLink to={'/page-two'}>
            GOTO PAGE 2
          </NavLink>
        </>
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    boilerplateData: state.boilerplate.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBoilerplateData: (params) => dispatch(boilerplate(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);