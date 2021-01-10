import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Form, Field } from 'react-final-form';
import {
  required,
  startTime,
  endTime,
  monthlyHours,
  composeValidators,
} from '../../utils/validations.js'

const AddBoiler = (props) => {
  const newBoiler = {
    id: null,
    idType: '',
    startTime: '',
    endTime: '',
    monthlyHours: '',
  };

  const [boiler, setBoiler] = useState(newBoiler);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoiler({ ...boiler, [name]: value });
  };

  const handleSubmit = (e) => {
    props.postBoiler(boiler);
    setBoiler(newBoiler);
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Add Boiler"
          className="modal"
        >
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values, submitting }) => (
              <form className="edit-form" onChange={handleChange}>

                <label>Boiler ID Type</label>
                <Field name="idType" value={boiler.idType} component="select" validate={required}>
                  <option value="0"></option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </Field>

                <label>Start Time</label>
                <Field
                  name="startTime"
                  value={boiler.startTime}
                  validate={composeValidators(required, startTime)}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input {...input} className="u-full-width" type="time" />
                      {meta.error && meta.touched && (
                        <span className="error-input">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>

                <label>End Time</label>
                <Field
                  name="endTime"
                  value={boiler.endTime}
                  validate={composeValidators(required, endTime)}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input {...input} className="u-full-width" type="time" />
                      {meta.error && meta.touched && (
                        <span className="error-input">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>

                <label>Total amount of Hours</label>
                <Field
                  name="monthlyHours"
                  value={boiler.monthlyHours}
                  validate={composeValidators(required, monthlyHours)}
                >
                  {({ input, meta }) => (
                    <div className="input-container">
                      <input
                        {...input}
                        className="u-full-width"
                        type="number"
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
                  disabled={submitting}
                >
                  Add Boiler
                </button>
              </form>
            )}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddBoiler;