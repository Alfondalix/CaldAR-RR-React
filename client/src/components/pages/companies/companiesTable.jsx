import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import AddCompany from './addCompany';

import styles from './companiesTable.module.css';

const CompaniesTable = (props) => {

  return (
    <TableContainer className={styles.container} component={Paper}>
      <Table className={styles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">COMPANY</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="right">ADDRESS</TableCell>
            <TableCell align="right">BUILDINGS</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.items}>
          {props.company.map((company) => (
            <TableRow key={company.id}>
              <TableCell component="th">
                {company.id}
              </TableCell>
              <TableCell align="right">{company.name}</TableCell>
              <TableCell align="right">{company.email}</TableCell>
              <TableCell align="right">{company.address}</TableCell>
              <TableCell align="right">{company.buildings}</TableCell>
              <TableCell align="center">
              <Button variant="contained" 
              color="primary">
                <EditIcon />
              </Button>
              <Button variant="contained" 
              color="secondary" onClick={() => props.deleteCompany(company.id)}>
                <DeleteIcon />
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompaniesTable;