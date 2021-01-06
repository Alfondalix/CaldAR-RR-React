import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Form, Field } from 'react-final-form';
import './Buildings.css';

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
    console.log(building);
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
          render={({ handleSubmit, values, submitting }) => (
            <form className="edit-form" onChange={handleChange}>
              <Field name="fullName" value={building.fullName}>
                {({ input }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Name..."
                      value={building.fullName}
                    />
                  </div>
                )}
              </Field>
              <Field name="address" value={building.address}>
                {({ input }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Address..."
                      value={building.address}
                    />
                  </div>
                )}
              </Field>
              <Field name="boilers" value={building.boilers}>
                {({ input }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="boilers..."
                      value={building.boilers}
                    />
                  </div>
                )}
              </Field>
              <Field name="phoneNumber" value={building.phoneNumber}>
                {({ input }) => (
                  <div className="input-container">
                    <input
                      {...input}
                      className="u-full-width"
                      type="text"
                      placeholder="Phone Number..."
                      value={building.phoneNumber}
                    />
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
