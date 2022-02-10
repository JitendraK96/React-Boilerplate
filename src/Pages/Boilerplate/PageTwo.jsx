/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//UTILS
import { getLocalStorage, setLocalStorage } from '../../Services/LocalStorage'

//ACTIONS
import { boilerplate } from '../../Services/Actions/boilerplate'

function PageTwo ({
  setBoilerplateData,
  boilerplateData,
}) {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const localData = getLocalStorage();
    if (localData[0]) setLocalData(localData);
  }, []);

  function deleteLoan(cid, lid) {
    const newLocalData = [];
    for (let i = 0; i < localData.length; i += 1) {

      if(localData[i].cid === cid) {
        const newLoans = localData[i].loans.filter((loan) => {
          return loan.lid !== lid;
        })
        localData[i].loans = newLoans;
      }
      newLocalData.push(localData[i]);
    }

    setLocalData(newLocalData);
    setLocalStorage(newLocalData);
  }

  function createUserStructure(data, index) {
    return (
      <div key={index}>
        <h2>{data.name}</h2>

        <table>
          <tr>
            <th>
              Description
            </th>
            <th>
              Quantity
            </th>
            <th>
              Delete
            </th>
          </tr>
          {
            data.loans.map((loan, key) => {
              return (
                <tr key={key}>
                  <td>
                    {loan.description}
                  </td>
                  <td>
                    {loan.quantity}
                  </td>
                  <td>
                    <span onClick={() => {
                      deleteLoan(data.cid, loan.lid);
                    }}>X</span>
                  </td>
                </tr>
              );
            })
          }
        </table>

        <NavLink to={`/add-loans?cid=${data.cid}`}>
          ADD LOAN
        </NavLink>
      </div>
    );
  }

  return (
    <div className='pagetwo'>
      <span>NO OF PEOPLE IN DB ARE {localData.length}</span>
      <div>PEOPLE LOANS</div>

      {localData.map((data, index) => {
        return createUserStructure(data, index)
      })}

      <NavLink to={'/page-one'}>
        GOTO PAGE 1
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