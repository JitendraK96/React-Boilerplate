/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import uuid from 'react-native-uuid';

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

//UTILS
import { getLocalStorage, setLocalStorage } from '../../Services/LocalStorage'

//VALIDATION
import { validateString } from '../../Services/Utils'

function PageOne ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [localData, setLocalData] = useState([]);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(true);

  useEffect(() => {
    const localData = getLocalStorage();
    if (localData[0]) setLocalData(localData);
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const newData = localData.concat([
      {
        name: event.target[0].value,
        cid: uuid.v4(),
        loans: []
      }
    ])
    setLocalData(newData);
    setLocalStorage(newData);
  }

  return (
    <div className='pageone'>
      <span>NO OF PEOPLE IN DB ARE {localData.length}</span>
      <h1>NEW PEOPLE FORM</h1>

      <form onSubmit={onSubmit}>
        <label>
          NAME: 
          <input type='text' name='Name' onChange={((data) => {
            const { error } = validateString(data.target.value);
            if (error) {
              setIsSubmitEnabled(true);
            } else {
              setIsSubmitEnabled(false);
            }
          })}></input>
          <input type='submit' value='Submit' disabled={isSubmitEnabled}/>
        </label>
      </form>

      <NavLink to={'/page-two'}>
        GOTO PEOPLE LOANS
      </NavLink>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    boilerplateData: state.boilerplate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBoilerplateData: (params) => dispatch(boilerplate(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);