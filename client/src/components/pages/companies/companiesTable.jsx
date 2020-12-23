import React, {useState} from 'react';
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

const CompaniesTable = (props) => {

  const initialCompany = {
    id: null,
    name: '',
    email: '',
    address: '',
    buildings: null,
  };

    // ADD COMPANY
    const addCompany = (newcompany) => {
      newcompany.id = Math.floor((Math.random() * (99999 - 10000 + 1)) + 10000);
      props.setCompany([...props.company, newcompany]);
    };

  const [edit, setEdit] = useState(false);
  const [currentCompany, setCurrentCompany] = useState(props.company);

    // EDIT COMPANY
    const editCompany = (id, company) => {
      setEdit(true);
      console.log(currentCompany.id);
      setCurrentCompany(company);
      console.log(company);
    };
    
    const updateCompany = (newcompany) => {
      console.log(props.company);
      console.log(newcompany);
      props.setCompany(props.company.map(company => (company.id === currentCompany.id ? newcompany : company)))
    };

  return (
    <>
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
            <TableCell align="center"><AddCompany className={styles.button} addCompany={addCompany} /></TableCell>
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
              <TableCell align="right">{company.buildings.length}</TableCell>
              <TableCell align="center">
              <Button >
                <EditCompany  currentCompany={currentCompany} updateCompany={updateCompany} editCompany={editCompany} />
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
    </>
  );
}

export default CompaniesTable;