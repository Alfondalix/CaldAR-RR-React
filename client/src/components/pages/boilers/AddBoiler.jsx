import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

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
    if (
      boiler.idType &&
      boiler.startTime &&
      boiler.endTime &&
      boiler.monthlyHours
    ) {
      handleChange(e, props.addBoiler(boiler));
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
      <button type="button" onClick={handleOpen}>
        New Boilers
      </button>
      <Modal
        open={open}
        onClose={(handleClose, handleSubmit)}
        aria-labelledby="simple-modal-title"
      >
        <form>
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
            placeholder="enter inicial hour"
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
            placeholder="enter total amount of hours"
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
    </>
  );
};
export default AddBoiler;