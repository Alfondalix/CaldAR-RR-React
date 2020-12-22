import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const EditBuilding = (props) => {
  const [building, setBuilding] = useState(props.currentBuilding);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuilding({ ...building, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (building.fullName) {
      props.updateBuilding(building);
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
      <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        <form>
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
          <button type="submit" onClick={() => props.setEditing(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
};

export default EditBuilding;
