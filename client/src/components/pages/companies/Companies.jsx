import React from 'react';
import CompaniesTable from './companiesTable.jsx';
import styles from './companies.module.css';

const Companies = () => {

  // DELETE COMPANY
  // const deleteCompany = (id) => {
  //   console.log(id);
  //   setCompany([...company.filter((company) => company.id !== id)]);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <CompaniesTable
          className={styles.table}
          // deleteCompany={deleteCompany}
        />
      </div>
    </div>
  );
};

export default Companies;
