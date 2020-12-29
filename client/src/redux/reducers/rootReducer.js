import { combineReducers } from 'redux';
import CompanyReducer from './companiesReducer';

const rootReducer = combineReducers({
  Company: CompanyReducer
});

export default rootReducer;
