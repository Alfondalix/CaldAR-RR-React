import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Form, Field } from 'react-final-form';
import './Buildings.css';
import {
  required,
  addressValid,
  nameValid,
  phoneValid,
  composeValidators,
} from '../../utils/validations.js';

const EditBuilding = (props) => {
  const [building, setBuilding] = useState(props.currentBuilding);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuilding({ ...building, [name]: value });
  };

  const handleSubmit = () => {
    props.putCBuilding(building);
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
    <div className="edit-container">
      <button className="btn-edi" onClick={handleOpen}>
        <i class="far fa-edit"></i>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Edit Building"
        className="modal"
      >
        <Form
          onSubmit={onSubmit}
          initialValues={props.currentBuilding}
          render={({ handleSubmit, values, submitting }) => (
            <form className="edit-form" onChange={handleChange}>
              <Field
                name="fullName"
                value={building.fullName}
                validate={composeValidators(required, nameValid)}
              >
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Name..."
                      value={building.fullName}
                    />
                    {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field
                name="address"
                value={building.address}
                validate={composeValidators(required, addressValid)}
              >
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Address..."
                      value={building.address}
                    />
                    {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="boilers" value={building.boilers}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="boilers..."
                      value={building.boilers}
                    />
                    {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field
                name="phoneNumber"
                value={building.phoneNumber}
                validate={composeValidators(required, phoneValid)}
              >
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Phone Number..."
                      value={building.phoneNumber}
                    />
                    {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit" onClick={handleSubmit}>
                Edit Building
              </button>
              <button type="submit" onClick={handleClose}>
                Cancel
              </button>
            </form>
          )}
        />
      </Modal>
    </div>
  );
};

export default EditBuilding;
