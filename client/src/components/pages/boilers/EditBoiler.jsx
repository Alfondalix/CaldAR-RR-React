import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const EditBoiler = (props) => {
  const [boiler, setBoiler] = useState(props.currentBoiler);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoiler({ ...boiler, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boiler.idType) {
      props.updateBoiler(boiler);
    }
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
      <button onClick={handleOpen}>Edit Boilers</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        <form>
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
            name="monthlyHorus"
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Edit Boiler
          </button>
          <button type="submit" onClick={() => props.setEditing(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
};
export default EditBoiler;