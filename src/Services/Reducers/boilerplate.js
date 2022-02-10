/* eslint-disable import/no-anonymous-default-export */
import { BOILERPLATE } from '../Constants';

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOILERPLATE:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
