import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import './Boilers.css';
import { Form, Field } from 'react-final-form';

import {
  required,
  startTime,
  endTime,
  monthlyHours,
  composeValidators,
} from '../../utils/validations'

const EditBoiler = (props) => {
  const [boiler, setBoiler] = useState(props.currentBoiler);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoiler({ ...boiler, [name]: value });
  };

  const handleSubmit = () => {
    props.putThBoiler(boiler);
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
    <div className="edit-container">
      <button className="btn-edi" onClick={handleOpen}>
        <i class="far fa-edit"></i>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Edit Boiler"
        className="modal"
      >
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, submitting }) => (
            <form className="edit-form" onChange={handleChange}>
              <label>Boiler ID Type</label>
              <Field name="idType" value={boiler.idType} component="select" validate={required}>
                <option value=""></option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </Field>
              <Field name="startTime" value={boiler.startTime} validate={composeValidators(required, startTime)}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="time"
                      value={boiler.startTime}
                    />
                      {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <label>End Time</label>
              <Field name="endTime" value={boiler.endTime} validate={composeValidators(required,endTime)}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="time"
                      value={boiler.endTime}
                    />
                      {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <label>Total amount of Hours</label>
              <Field name="monthlyHours" value={boiler.monthlyHours}validate={composeValidators(required,monthlyHours)}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="number"
                      value={boiler.monthlyHours}
                    />
                      {meta.error && meta.touched && (
                      <span className="error-input">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit" onClick={handleSubmit} disabled={submitting}>
                Edit Boiler
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

export default EditBoiler;
