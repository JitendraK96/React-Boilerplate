/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Services/UserContext'

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

function PageTwo ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [pageLoader, setPageLoader] = useState(false);
  const [localUsers, setLocalUsers] = useState([]);
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    setLocalUsers(users);
  }, []);

  function changeState() {
    setBoilerplateData({
      'URL': 'https://jsonplaceholder.typicode.com/todos/2',
      setPageLoader,
    });
  }

  console.log(localUsers, 'DATA');
  return (
    <div className='pagetwo'>
      {
        pageLoader ? <>LOADING DATA FOR PAGE 2.................</> : 
        <>
          <div>PAGE 2 - Users In DB Are: {localUsers.length}</div>

          {localUsers.map((user, index) => {
            return (<>
              <h2>
                {user.name}
              </h2>
              <table>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
                {
                  user.loans.map((loan, key) => {
                    return (<tr key={key}>
                      <td>{loan.description}</td>
                      <td>{loan.quantity}</td>
                      <td><span onClick={() => {
                            console.log(user.uid, 'ID');
                          }}>X</span></td>
                    </tr>);
                  })
                }
              </table>
              <NavLink to={`/add-loans?uid=${user.uid}`}>
                ADD LOAN
              </NavLink>
            </>);
          })}

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