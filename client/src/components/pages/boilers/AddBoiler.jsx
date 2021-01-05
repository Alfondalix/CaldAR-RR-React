import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Form, Field } from 'react-final-form';

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
    e.preventDefault();
    props.postBoiler(boiler);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="add-btn" type="button" onClick={handleOpen}>
        <i class="fas fa-plus-circle"></i>
      </button>
      <div>
        <Modal
          open={open}
          onClose={(handleSubmit, handleClose)}
          aria-labelledby="Add Boiler"
          className="modal"
        >
          <form action="Submit" className="edit-form">
            <input
              className="u-full-width"
              type="text"
              name="idType"
              placeholder="please, enter ID type"
              value={boiler.idType}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="time"
              name="startTime"
              placeholder="enter initial hour"
              value={boiler.startTime}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="time"
              name="endTime"
              placeholder="Enter finish hour"
              value={boiler.endTime}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="number"
              name="monthlyHours"
              placeholder="Monthly Hours"
              value={boiler.monthlyHours}
              onChange={handleChange}
            />
            <button
              className="button-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Add new Boiler
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default AddBoiler;