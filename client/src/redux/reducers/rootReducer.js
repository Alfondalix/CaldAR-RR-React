import { combineReducers } from 'redux';
import CompanyReducer from './companiesReducer';
import buildingsReducer from './buildingsReducer';

const rootReducer = combineReducers({
  Company: CompanyReducer,
  buildings: buildingsReducer,
});

export default rootReducer;
