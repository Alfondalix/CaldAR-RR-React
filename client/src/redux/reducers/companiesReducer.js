import {
  SHOW_COMPANIES_FETCHING,
  SHOW_COMPANIES_FULFILLED,
  SHOW_COMPANIES_REJECTED,
  ADD_COMPANY_FETCHING,
  ADD_COMPANY_FULFILLED,
  ADD_COMPANY_REJECTED,
  EDIT_COMPANY_FETCHING,
  EDIT_COMPANY_FULFILLED,
  EDIT_COMPANY_REJECTED,
  DELETE_COMPANY_FETCHIN,
  DELETE_COMPANY_FULFILLE,
  DELETE_COMPANY_REJECTED,
} from '../types/companiesTypes';

const initialState = {
  list: [],
};

const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPANIES_FETCHING:
      return {
        ...state,
      };
    case SHOW_COMPANIES_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case SHOW_COMPANIES_REJECTED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default CompanyReducer;
