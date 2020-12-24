import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import styles from './forms.module.css';
import EditIcon from '@material-ui/icons/Edit';

const EditCompany = (props) => {
  const [comp, setCompany] = useState(props.currentCompany);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...comp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comp.name) {
      props.updateCompany(comp);
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
      <div className={styles.container}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.editCompany(comp.id, comp);
            handleOpen();
          }}
        >
          <EditIcon />
        </Button>
        <Modal open={open} onClose={handleClose}>
          <form className={styles.formModal}>
            <TextField
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              onChange={handleChange}
              value={comp.name}
              name="name"
            />
            <TextField
              id="outlined-basic"
              label="EMAIL"
              variant="outlined"
              onChange={handleChange}
              value={comp.email}
              name="email"
            />
            <TextField
              id="outlined-basic"
              label="ADDRESS"
              variant="outlined"
              onChange={handleChange}
              value={comp.addres}
              name="address"
            />
            <TextField
              id="outlined-basic"
              label="BUILDINGS"
              variant="outlined"
              onChange={handleChange}
              value={comp.buildings}
              name="buildings"
            />
            <div>
              <Button onClick={handleSubmit}>
                <CheckCircleIcon />
              </Button>
              <Button onClick={handleClose}>
                <CancelIcon />
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default EditCompany;
