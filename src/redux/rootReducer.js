import { combineReducers } from 'redux';

import campersReducer from './campers/slice';
import filterReducer from './filter/slice';

const rootReducer = combineReducers({
  campers: campersReducer,
  filter: filterReducer,
});

export default rootReducer;
