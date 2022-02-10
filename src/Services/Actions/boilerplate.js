import { BOILERPLATE } from '../Constants';
import axios from 'axios';

export const boilerplate = (params) => async(dispatch) => {
  try {
    const { users, setPageLoader } = params;
    setPageLoader(true);

    await dispatch({
      type: BOILERPLATE,
      payload: users,
    });
    setPageLoader(false);
  } catch (error) {
    console.error(error, 'ERROR');
  }
};
