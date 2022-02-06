import { BOILERPLATE } from '../Constants';
import axios from 'axios';

export const boilerplate = (params) => async(dispatch) => {
  try {
    const { URL, setPageLoader } = params;
    setPageLoader(true);
    const res = await axios.get(`${URL}`);

    dispatch({
      type: BOILERPLATE,
      payload: res.data,
    });
    setPageLoader(false);
  } catch (error) {
    console.error(error, 'ERROR');
  }
};
