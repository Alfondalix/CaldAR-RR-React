import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import './Boilers.css';

const EditBoiler = (props) => {
  const [boiler, setBoiler] = useState(props.currentBoiler);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoiler({ ...boiler, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.putThBoiler(boiler);
    console.log(boiler);
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
        aria-labelledby="Edit Boiler"
        className="modal"
      >
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={boiler.idType}
            name="idType"
            onChange={handleChange}
          />
          <input
            type="time"
            value={boiler.startTime}
            name="startTime"
            onChange={handleChange}
          />
          <input
            type="time"
            value={boiler.endTime}
            name="endTime"
            onChange={handleChange}
          />
          <input
            type="number"
            value={boiler.monthlyHours}
            name="monthlyHours"
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Edit Boiler
          </button>
          <button type="submit" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditBoiler;