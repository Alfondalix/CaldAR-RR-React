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
    if (
      building.fullName &&
      building.address &&
      building.boilers &&
      building.phoneNumber
    ) {
      handleChange(e, props.addBuilding(building));
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
        New Building
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
            Add user
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddBuilding;
