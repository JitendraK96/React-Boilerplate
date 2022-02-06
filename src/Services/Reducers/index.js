import { combineReducers } from 'redux';

import BoilerplateReducer from './boilerplate';

export default combineReducers({
  boilerplate: BoilerplateReducer,
});