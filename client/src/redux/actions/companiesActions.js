import {
  GET_COMPANIES_FETCHING,
  GET_COMPANIES_REJECTED,
  GET_COMPANIES_FULFILLED,
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

const URL = 'http://localhost:5000/api/companies';

const getCompaniesFetching = () => ({
  type: GET_COMPANIES_FETCHING,
});

const getCompaniesFulfilled = (payload) => ({
  type: GET_COMPANIES_FULFILLED,
  payload,
});

const getCompaniesRejected = () => ({
  type: GET_COMPANIES_REJECTED,
});

export const getCompanies = () => (dispatch) => {
  dispatch(getCompaniesFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getCompaniesFulfilled(response));
    })
    .catch((err) => {
      dispatch(getCompaniesRejected(err));
    });
};

const addCompanyFetching = () => ({
  type: ADD_COMPANY_FETCHING,
});

const addCompanyFulfilled = (payload) => ({
  type: ADD_COMPANY_FULFILLED,
  payload,
});

const addCompanyRejected = () => ({
  type: ADD_COMPANY_REJECTED,
});

export const addCompany = (company) => (dispatch) => {
  dispatch(addCompanyFetching());
  return fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(company),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addCompanyFulfilled(response));
    })
    .catch((err) => {
      dispatch(addCompanyRejected(err));
    });
};

const deleteCompanyFetching = () => ({
  type: DELETE_COMPANY_FETCHING,
});

const deleteCompanyFulfilled = (payload) => ({
  type: DELETE_COMPANY_FULFILLED,
  payload,
});

const deleteCompanyRejected = () => ({
  type: DELETE_COMPANY_REJECTED,
});

export const deleteCompany = (_id) => (dispatch) => {
  dispatch(deleteCompanyFetching());
  return fetch(`${URL}/${_id}`, { method: 'DELETE' })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteCompanyFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteCompanyRejected());
    });
};

const updateCompanyFetching = () => ({
  type: EDIT_COMPANY_FETCHING,
});

const updateCompanyFulfilled = (payload) => ({
  type: EDIT_COMPANY_FULFILLED,
  payload,
});

const updateCompanyRejected = () => ({
  type: EDIT_COMPANY_REJECTED,
});

export const updateCompany = (newCompany) => (dispatch) => {
  dispatch(updateCompanyFetching());
  return fetch(`${URL}/${newCompany._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCompany),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(updateCompanyFulfilled(newCompany));
    })
    .catch((error) => {
      dispatch(updateCompanyRejected(error));
    });
};
