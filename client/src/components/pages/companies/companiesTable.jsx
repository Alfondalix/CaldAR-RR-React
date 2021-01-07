import React, { useState, useEffect } from 'react';
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
import Modal from '@material-ui/core/Modal';

import {
  getCompanies as getCompaniesAction,
  deleteCompany as deleteCompanyAction,
  updateCompany as updateCompanyAction,
  addCompany as addCompanyAction,
} from '../../../redux/actions/companiesActions';

import { bindActionCreators } from 'redux';

const CompaniesTable = ({
  companies,
  getCompanies,
  deleteCompany,
  updateCompany,
  addCompany,
}) => {
  const [Id, setId] = useState(null);

  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  const addNewCompany = (company) => {
    addCompany(company);
  };

  const updateCurCompany = (company) => {
    updateCompany(company);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <AddCompany
                  className={styles.button}
                  addCompany={addNewCompany}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.items}>
            {companies &&
              companies.map((company) => (
                <>
                  <TableRow key={company._id}>
                    <TableCell align="right">{company.cuit}</TableCell>
                    <TableCell align="right">{company.email}</TableCell>
                    <TableCell align="right">{company.adress}</TableCell>
                    <TableCell align="right">
                      {company.buildings.length}
                    </TableCell>
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
                        onClick={() => {
                          handleOpen();
                          setId(company._id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open}>
        <div className={styles.modal}>
          <span>Are you sure to delete Company ( {Id} ) </span>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteCompany(Id)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleClose()}
          >
            No
          </Button>
        </div>
      </Modal>
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
