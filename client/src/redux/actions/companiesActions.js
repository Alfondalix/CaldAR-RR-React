import { SHOW_COMPANIES_FETCHING, SHOW_COMPANIES_REJECTED, SHOW_COMPANIES_FULFILLED } from '../types/companiesTypes';

const URL = "https://caldar-rr-alfonso.herokuapp.com/api/companies";

const getCompaniesFetching = () => dispatch => ({
  type: SHOW_COMPANIES_FETCHING,
});

const getCompaniesFulfilled = (payload) => ({
  type: SHOW_COMPANIES_FULFILLED,
  payload,
});

const getCompaniesRejected = () => dispatch => ({
  type: SHOW_COMPANIES_REJECTED,
});

const getCompanies = () => dispatch => {

  dispatch(getCompaniesFetching());
  return fetch(URL)
    .then(data => data.json())
    .then (response => {
      dispatch(getCompaniesFulfilled(response));
    })
    .catch((err) => {
      dispatch(getCompaniesRejected(err));
    });
};