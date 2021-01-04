import { combineReducers } from 'redux';
import BoilerTypesReducer from './boilerTypesReducer';

const rootReducer = combineReducers({
  BoilerTypes: BoilerTypesReducer
});

export default rootReducer;
