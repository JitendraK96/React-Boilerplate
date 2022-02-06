/* eslint-disable import/no-anonymous-default-export */
import { BOILERPLATE } from '../Constants';

const initialState = {
  my_state: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOILERPLATE:
      return {
        ...state,
        my_state: action.payload,
      };
    default:
      return state;
  }
}
