
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const EditBoilerType = (props) => {
    const [boilerType, setBoilerType] = useState(props.currentBoilerType);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoilerType({ ...boilerType, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (boilerType.name) {
            props.updateBoilerType(boilerType);
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
                        value={boilerType.name}
                        name="Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={boilerType.description}
                        name="Description"
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Edit Boiler Type
                    </button>
                    <button type="submit" onClick={() => props.setEditing(false)}>
                        Cancel
                    </button>
                </form>
            </Modal>
        </>
    );
};
export default EditBoilerType;