import React, { useState } from 'react';
import companies from './companies.json';
import CompaniesTable from './companiesTable.jsx';
import styles from './companies.module.css';

const Companies = () => {
  const [company, setCompany] = useState(companies);

  // DELETE COMPANY
  const deleteCompany = (id) => {
    console.log(id);
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
