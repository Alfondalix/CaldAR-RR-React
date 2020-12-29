import { combineReducers } from 'redux';
import CompanyReducer from './companiesReducer';
import buildingsReducer from './buildingsReducer';
import BoilerTypesReducer from './boilerTypesReducer';
import boilersReducer from './Boilers.reducer';
 

const rootReducer = combineReducers({
  Company: CompanyReducer,
  buildings: buildingsReducer,
  BoilerTypes: BoilerTypesReducer,
  boilers: boilersReducer,

});

export default rootReducer;