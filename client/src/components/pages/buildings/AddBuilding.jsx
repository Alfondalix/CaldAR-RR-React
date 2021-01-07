import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Form, Field } from 'react-final-form';
import {
  required,
  addressValid,
  nameValid,
  phoneValid,
  composeValidators,
} from '../../utils/validations.js';

const AddBuilding = (props) => {
  const newBuilding = {
    id: null,
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
  };

  const [building, setBuilding] = useState(newBuilding);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuilding({ ...building, [name]: value });
  };

  const handleSubmit = () => {
    props.postBuilding(building);
    setBuilding(newBuilding);
    setOpen(false);
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
      <button className="add-btn" type="button" onClick={handleOpen}>
        <i class="fas fa-plus-circle"></i>
      </button>
      <div className="edit-container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Add Building"
          className="modal"
        >
          <Form
            onSubmit={onSubmit}
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
                      />
                      {meta.error && meta.touched && (
                        <span className="error-input">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  name="boilers"
                  value={building.boilers}
                  validate={required}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input
                        {...input}
                        className="u-full-width"
                        type="text"
                        placeholder="Boilers..."
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
                      />
                      {meta.error && meta.touched && (
                        <span className="error-input">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <button
                  className="button-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add building
                </button>
              </form>
            )}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddBuilding;
