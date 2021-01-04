import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postBuilding(building);
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
      <div className="edit-container">
        <Modal
          open={open}
          onClose={(handleSubmit, handleClose)}
          aria-labelledby="Add Building"
          className="modal"
        >
          <form action="Submit" className="edit-form">
            <input
              className="u-full-width"
              type="text"
              name="fullName"
              placeholder="Name..."
              value={building.fullName}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="text"
              name="address"
              placeholder="Address..."
              value={building.address}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="text"
              name="boilers"
              placeholder="Boilers..."
              value={building.boilers}
              onChange={handleChange}
            />
            <input
              className="u-full-width"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number..."
              value={building.phoneNumber}
              onChange={handleChange}
            />
            <button
              className="button-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Add building
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default AddBuilding;
