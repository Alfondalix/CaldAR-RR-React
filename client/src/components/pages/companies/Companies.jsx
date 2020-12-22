import React, { useState } from 'react';
import companies from './companies.json';
import CompaniesTable from './companiesTable.jsx';

import styles from './companies.module.css';
import AddCompany from './addCompany';


const Companies = () => {

  const initialCompany = {
    id: null,
    name: '',
    email: '',
    address: '',
    buildings: null,
  };

  const [company, setCompany] = useState(companies);

  // ADD COMPANY
  const addCompany = (company) => {
    company.id = Math.round(Math.random() * 100);
    setCompany([...companies, company]);
  };

  // DELETE COMPANY
  const deleteCompany = (id) => {
    const companiesFilter = company.filter(company => company.id !== id);
    setCompany(companiesFilter);
    console.log('eliminado');
  }

  return (
    <div className={styles.container} >
      {/* <h1>Companies Page</h1> */}
      <div className={styles.main}>
      <CompaniesTable className={styles.table} company={company} deleteCompany={deleteCompany} />
      <AddCompany addCompany={addCompany} />
      </div>
    </div>
  );
};

export default Companies;