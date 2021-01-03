import {
  GET_COMPANIES_FETCHING,
  GET_COMPANIES_FULFILLED,
  GET_COMPANIES_REJECTED,
  ADD_COMPANY_FETCHING,
  ADD_COMPANY_FULFILLED,
  ADD_COMPANY_REJECTED,
  EDIT_COMPANY_FETCHING,
  EDIT_COMPANY_FULFILLED,
  EDIT_COMPANY_REJECTED,
  DELETE_COMPANY_FETCHING,
  DELETE_COMPANY_FULFILLED,
  DELETE_COMPANY_REJECTED,
} from '../types/companiesTypes';

const initialState = {
  list: [],
};

const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_FETCHING:
      return {
        ...state,
      };
    case GET_COMPANIES_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_COMPANIES_REJECTED:
      return {
        ...state,
      };
    case ADD_COMPANY_FETCHING:
      return {
        ...state,
      };
    case ADD_COMPANY_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_COMPANY_REJECTED:
      return {
        ...state,
      };
    case DELETE_COMPANY_FETCHING:
      return {
        ...state,
      };
    case DELETE_COMPANY_FULFILLED:
      return {
        ...state,
        list: state.list.filter(
          (company) => company._id !== action.payload
        ),
      };
    case DELETE_COMPANY_REJECTED:
      return {
        ...state,
      };
    case EDIT_COMPANY_FETCHING:
      return {
        ...state,
      };
    case EDIT_COMPANY_FULFILLED:
      return {
        ...state,
        list: state.list.map((company) =>
          company._id === action.payload._id ? action.payload : company
        ),
      };
    case EDIT_COMPANY_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default CompanyReducer;
