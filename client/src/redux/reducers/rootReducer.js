import { combineReducers } from 'redux';

import CompanyReducer from './companiesReducer';
import buildingsReducer from './buildingsReducer';
import BoilerTypesReducer from './boilerTypesReducer';

const rootReducer = combineReducers({
  Company: CompanyReducer,
  buildings: buildingsReducer,
  BoilerTypes: BoilerTypesReducer,
});

export default rootReducer;
