import React, { useState } from 'react';
import companies from './companies.json';
import CompaniesTable from './companiesTable.jsx';
import styles from './companies.module.css';

const Companies = () => {
  const [companymain, setCompany] = useState(companies);
  const company = JSON.parse(JSON.stringify(companymain));

  // DELETE COMPANY
  const deleteCompany = (id) => {
    setCompany([...company.filter((company) => company.id !== id)]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <CompaniesTable
          className={styles.table}
          company={company}
          deleteCompany={deleteCompany}
          setCompany={setCompany}
        />
      </div>
    </div>
  );
};

export default Companies;
