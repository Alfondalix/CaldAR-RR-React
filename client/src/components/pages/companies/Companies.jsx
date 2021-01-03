import React from 'react';
import CompaniesTable from './companiesTable.jsx';
import styles from './companies.module.css';

const Companies = () => {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <CompaniesTable
          className={styles.table}
        />
      </div>
    </div>
  );
};

export default Companies;
