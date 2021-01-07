import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import styles from './forms.module.css';
import { Form, Field } from 'react-final-form';
import {
  required,
  addressValidator,
  emailValidator,
  cuitValidator,
  composeValidators,
} from '../../utils/validations';

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

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values, e) => {
    await sleep(300);
    handleSubmit();
  };

  return (
    <div className={styles.container}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <AddBoxIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className={styles.formModal} onChange={handleChange}>
              <Field
                name="cuit"
                validate={composeValidators(required, cuitValidator)}
                value={company.cuit}
              >
                {({ input, meta }) => (
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="CUIT"
                      variant="outlined"
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field
                name="email"
                validate={composeValidators(required, emailValidator)}
              >
                {({ input, meta }) => (
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="EMAIL"
                      variant="outlined"
                      value={company.email}
                      {...input}
                      name="email"
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field
                name="adress"
                validate={composeValidators(required, addressValidator)}
              >
                {({ input, meta }) => (
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="ADDRESS"
                      variant="outlined"
                      onChange={handleChange}
                      value={company.adress}
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="buildings" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="BUILDINGS"
                      variant="outlined"
                      onChange={handleChange}
                      value={company.buildings}
                      {...input}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <div>
                <Button onClick={handleSubmit} disabled={submitting}>
                  <CheckCircleIcon />
                </Button>
                <Button onClick={handleClose}>
                  <CancelIcon />
                </Button>
              </div>
            </form>
          )}
        />
      </Modal>
    </div>
  );
};

export default AddCompany;
