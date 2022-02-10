/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import uuid from 'react-native-uuid';

//UTILS
import { getLocalStorage, setLocalStorage } from '../../Services/LocalStorage'

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

//VALIDATION
import { validateString } from '../../Services/Utils'

function PageTwo ({
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
    for (let i = 0; i < localData.length; i += 1) {
      if (localData[i].cid === cid) {
        localData[i].loans.push({
          description: event.target[0].value,
          quantity: event.target[1].value,
          lid: uuid.v4(),
        });
      }
    }

    setLocalData(localData);
    setLocalStorage(localData);
  }

  const search = useLocation().search;
  const cid = new URLSearchParams(search).get('cid');

  return (
    <div className='addloan'>
      <span>NO OF PEOPLE IN DB ARE {localData.length}</span>
      <div>ADD LOANS FOR {cid}</div>

      <form onSubmit={onSubmit}>
        <label>
          DESCRIPTION: 
          <input type='text' name='Description' onChange={((data) => {
            const { error } = validateString(data.target.value);
            if (error) {
              setIsSubmitEnabled(true);
            } else {
              setIsSubmitEnabled(false);
            }
          })}></input>
        </label>
        <label>
          QUANTITY: 
          <input type='number' name='Quantity' onChange={((data) => {
            const { error } = validateString(data.target.value);
            if (error) {
              setIsSubmitEnabled(true);
            } else {
              setIsSubmitEnabled(false);
            }
          })}></input>
        </label>
        
        <input type='submit' value='Submit' disabled={isSubmitEnabled}/>
      </form>

      <NavLink to={'/page-two'}>
        GOTO PEOPLES
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);