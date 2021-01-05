import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import styles from './forms.module.css';
import { Form, Field } from 'react-final-form';

const AddCompany = (props) => {
  const newCompany = {
    id: null,
    cuit: null,
    email: '',
    adress: '',
    buildings: [],
  };

  const [company, setCompany] = useState(newCompany);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCompany(company);
    setOpen(false);
    setCompany(newCompany);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <AddBoxIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <form className={styles.formModal}>
          <TextField
            id="outlined-basic"
            label="CUIT"
            variant="outlined"
            onChange={handleChange}
            value={company.cuit}
            name="cuit"
          />
          <TextField
            id="outlined-basic"
            label="EMAIL"
            variant="outlined"
            onChange={handleChange}
            value={company.email}
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="ADDRESS"
            variant="outlined"
            onChange={handleChange}
            value={company.adress}
            name="adress"
          />
          <TextField
            id="outlined-basic"
            label="BUILDINGS"
            variant="outlined"
            onChange={handleChange}
            value={company.buildings}
            name="buildings"
          />
          <div>
            <Button onClick={handleSubmit}>
              <CheckCircleIcon />
            </Button>
            <Button onClick={handleClose}>
              <CancelIcon />
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCompany;
