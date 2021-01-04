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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.putCBuilding(building);
    console.log(building);
    setOpen(false);
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
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={building.fullName}
            name="fullName"
            onChange={handleChange}
          />
          <input
            type="text"
            value={building.address}
            name="address"
            onChange={handleChange}
          />
          <input
            type="text"
            value={building.boilers}
            name="boilers"
            onChange={handleChange}
          />
          <input
            type="text"
            value={building.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Edit Building
          </button>
          <button type="submit" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditBuilding;
