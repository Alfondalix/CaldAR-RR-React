import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import styles from './forms.module.css';
import EditIcon from '@material-ui/icons/Edit';
import { Form, Field } from 'react-final-form';

const EditCompany = (props) => {
  // const [comp, setCompany] = useState(props.currentCompany);
  const comp = props.currentCompany;
  const [open, setOpen] = useState(false);
  const [initialComp, setInitialComp] = useState(props.currentCompany);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialComp({ ...initialComp, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    props.updateCompany(initialComp);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInitialComp(comp);
    setOpen(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values, e) => {
    await sleep(300);
    handleSubmit();
  };

  const required = (value) => (
    (value ? undefined : 'Required');
    console.log(value);
  );

  return (
    <>
      <div className={styles.container}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleOpen();
          }}
        >
          <EditIcon />
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, values }) => (
              <form className={styles.formModal} onChange={handleChange}>
                <Field value={initialComp.cuit} validate={required} name="cuit">
                  {({ input, meta }) => (
                    <div>
                      <TextField
                        {...input}
                        id="outlined-basic"
                        label="CUIT"
                        variant="outlined"
                        value={initialComp.cuit}
                      />
                      {meta.touched && (
                        <span className={styles.error}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  value={initialComp.email}
                  validate={required}
                  name="email"
                >
                  {({ input, meta }) => (
                    <div>
                      <TextField
                        {...input}
                        id="outlined-basic"
                        label="EMAIL"
                        variant="outlined"
                        value={initialComp.email}
                      />
                      {meta.touched && (
                        <span className={styles.error}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  value={initialComp.adress}
                  validate={required}
                  name="adress"
                >
                  {({ input, meta }) => (
                    <div>
                      <TextField
                        {...input}
                        id="outlined-basic"
                        label="ADRESS"
                        variant="outlined"
                        value={initialComp.adress}
                      />
                      {meta.touched && (
                        <span className={styles.error}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  value={initialComp.buildings}
                  validate={required}
                  name="buildings"
                >
                  {({ input, meta }) => (
                    <div>
                      <TextField
                        {...input}
                        id="outlined-basic"
                        label="BUILDINGS"
                        variant="outlined"
                        value={initialComp.buildings}
                      />
                      {meta.touched && (
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
    </>
  );
};

export default EditCompany;
