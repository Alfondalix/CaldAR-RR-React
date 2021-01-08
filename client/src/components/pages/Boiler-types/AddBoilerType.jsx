import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import styles from './boilerTypes.module.css';
import { Form, Field } from 'react-final-form';
import {
  required,
  nameBTValid,
  descriptionValid,
  composeValidators,
} from '../../utils/validations.js';

const AddBoilertype = (props) => {
  const newBoilerType = {
    id: null,
    name: '',
    description: '',
  };

  const [boilerType, setBoilerType] = useState(newBoilerType);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoilerType({ ...boilerType, [name]: value });
  };

  const handleSubmit = () => {
    props.addBoilerTypes(boilerType);
    setOpen(false);
    setBoilerType(newBoilerType);
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
    <>
      <button className={styles.addBtn} type="button" onClick={handleOpen}>
        <i class="fas fa-plus-circle"></i>
      </button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          className={styles.modal}
        >
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values, submitting }) => (
              <form className={styles.editForm} onChange={handleChange}>
                <Field
                  name="name"
                  value={boilerType.name}
                  validate={composeValidators(required, nameBTValid)}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input
                        {...input}
                        className="u-full-width"
                        type="text"
                        placeholder="Name..."
                      />
                      {meta.error && meta.touched && (
                        <span className={styles.error}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  name="description"
                  value={boilerType.description}
                  validate={composeValidators(required, descriptionValid)}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input
                        {...input}
                        className="u-full-width"
                        type="text"
                        placeholder="Description..."
                      />
                      {meta.error && meta.touched && (
                        <span className={styles.error}>{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <button
                  className="button-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add Boiler Type
                </button>
              </form>
            )}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddBoilertype;
