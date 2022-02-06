/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

function PageOne ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [pageLoader, setPageLoader] = useState(false);

  useEffect(() => {
    setBoilerplateData({
      'URL': 'https://jsonplaceholder.typicode.com/todos/1',
      setPageLoader,
    });
  }, []);

  function changeState() {
    setBoilerplateData({
      'URL': 'https://jsonplaceholder.typicode.com/todos/1',
      setPageLoader,
    });
  }

  return (
    <div className='pageone'>
      {
        pageLoader ? <>LOADING DATA FOR PAGE 1.................</> : 
        <>
          <div>PAGE 1</div>

          <div>STATE DATA: {boilerplateData.my_state ? `${boilerplateData.my_state.id} ${boilerplateData.my_state.title}` : 'NO DATA'}</div>

          <div style={{
            border: '1px solid black',
            padding: '10px',
            width: '30%',
            margin: '0 auto'
          }}
          onClick={changeState}>
            CLICK HERE TO CHANGE STATE
          </div>

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
    boilerplateData: state.boilerplate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBoilerplateData: (params) => dispatch(boilerplate(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);