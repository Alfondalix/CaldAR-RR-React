import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import styles from './boilerTypes.module.css';
import { Form, Field } from 'react-final-form';
import {
  required,
  nameValid,
  descriptionValid,
  composeValidators,
} from '../../utils/validations.js';

const EditBoilerType = (props) => {
  const [boilerType, setBoilerType] = useState(props.currentBoilerType);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoilerType({ ...boilerType, [name]: value });
  };

  const handleSubmit = () => {
    props.updateBoilerTypes(boilerType);
    setOpen(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values, e) => {
    await sleep(300);
    handleSubmit();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className={styles.btnEdi}>
        <i class="far fa-edit"></i>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        className={styles.modal}
      >
        <Form
          onSubmit={onSubmit}
          initialValues={props.currentBoilerType}
          render={({ handleSubmit, values, submitting }) => (
            <form className={styles.editForm} onChange={handleChange}>
              <Field name="name" value={boilerType.name} validate={composeValidators(required, nameValid)}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Name..."
                      value={boilerType.name}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="description" value={boilerType.description} validate={composeValidators(required, descriptionValid)}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Description..."
                      value={boilerType.description}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit" onClick={handleSubmit}>
                Edit Boiler Type
              </button>
              <button type="submit" onClick={handleClose}>
                Cancel
              </button>
            </form>
          )}
        />
      </Modal>
    </>
  );
};
export default EditBoilerType;
