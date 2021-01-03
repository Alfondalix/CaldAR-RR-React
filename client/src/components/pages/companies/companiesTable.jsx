import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './companiesTable.module.css';
import EditCompany from './editCompany';
import AddCompany from './addCompany';

import {
  getCompanies as getCompaniesAction,
  deleteCompany as deleteCompanyAction,
  updateCompany as updateCompanyAction,
  addCompany as addCompanyAction,
} from '../../../redux/actions/companiesActions';

import { bindActionCreators } from 'redux';

const CompaniesTable = ({ companies, getCompanies, deleteCompany, updateCompany, addCompany }) => {
  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  const addNewCompany = (company) => {
    addCompany(company);
  };

  const updateCurCompany = (company) => {
    updateCompany(company);
  };

  // ADD COMPANY
  // const addCompany = (newcompany) => {
  //   newcompany.id = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  //   props.setCompany([...props.company, newcompany]);
  // };

  // const updateCompany = (newcompany) => {
  //   props.setCompany(
  //     props.company.map((company) =>
  //       company.id === newcompany.id ? newcompany : company
  //     )
  //   );
  // };

  return (
    <>
      <TableContainer className={styles.container} component={Paper}>
        <Table className={styles.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">CUIT</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
              <TableCell align="right">BUILDINGS</TableCell>
              <TableCell align="center">ACTIONS</TableCell>
              <TableCell align="center">
                <AddCompany className={styles.button} addCompany={addNewCompany} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.items}>
            {companies && companies.map((company) => (
              <TableRow key={company._id}>
                <TableCell align="right">{company.cuit}</TableCell>
                <TableCell align="right">{company.email}</TableCell>
                <TableCell align="right">{company.adress}</TableCell>
                <TableCell align="right">{company.buildings.length}</TableCell>
                <TableCell align="center">
                  <Button>
                    <EditCompany
                      currentCompany={company}
                      updateCompany={updateCurCompany}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteCompany(company._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCompanies: getCompaniesAction,
      deleteCompany: deleteCompanyAction,
      updateCompany: updateCompanyAction,
      addCompany: addCompanyAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    companies: state.Company.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesTable);
