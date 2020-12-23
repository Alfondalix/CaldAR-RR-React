import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';

const EditBuilding = (props) => {
  const [building, setBuilding] = useState(props.currentBuilding);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setBuilding(props.currentBuilding);
  }, [props]);

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
    props.setEdit(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="edit-container">
      <button className="add-btn" onClick={handleOpen}>
        <i class="far fa-edit"></i>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Edit Building"
        className="modal"
      >
        <form className="edit-form">
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
          <button type="submit" onClick={() => props.setEdit(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditBuilding;
