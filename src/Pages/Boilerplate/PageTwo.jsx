/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

function PageTwo ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [pageLoader, setPageLoader] = useState(false);

  useEffect(() => {
    setBoilerplateData({
      'URL': 'https://jsonplaceholder.typicode.com/todos/2',
      setPageLoader,
    });
  }, []);

  function changeState() {
    setBoilerplateData({
      'URL': 'https://jsonplaceholder.typicode.com/todos/2',
      setPageLoader,
    });
  }

  return (
    <div className='pagetwo'>
      {
        pageLoader ? <>LOADING DATA FOR PAGE 2.................</> : 
        <>
          <div>PAGE 2</div>

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

          <NavLink to={'/page-one'}>
            GOTO PAGE 1
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);