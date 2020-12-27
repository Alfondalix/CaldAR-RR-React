import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import styles from './boilerTypes.module.css';

const AddBoilertype = (props) => {
    const newBoilerType = {
        id: null,
        name: '',
        description: '',
    };

    const [boilerType, setBoilerType] = useState(newBoilerType);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setBoilerType({ ...boilerType, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            boilerType.name &&
            boilerType.description
        ) {
            handleChange(e, props.addBoilerType(boilerType));
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
            <button className= {styles.addBtn} type="button" onClick={handleOpen}>
                <i class="fas fa-plus-circle"></i>
            </button>
            <div>
                <Modal
                    open={open}
                    onClose={(handleClose, handleSubmit)}
                    aria-labelledby="simple-modal-title"
                    className = {styles.modal}
                >
                    <form className= {styles.editForm}>
                        <input
                            className="u-full-width"
                            type="text"
                            name="Name"
                            placeholder="Name..."
                            value={boilerType.name}
                            onChange={handleChange}
                        />
                        <input
                            className="u-full-width"
                            type="text"
                            name="Description"
                            placeholder="Description..."
                            value={boilerType.description}
                            onChange={handleChange}
                        />
                    <button
                        className="button-primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </form>
                </Modal>
            </div>
        </>
    );
};

export default AddBoilertype;


