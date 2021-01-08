import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './boilerTypes.module.css';
import {
  getBoilerTypes as getBoilerTypesAction,
  deleteBoilerTypes as deleteBoilerTypesAction,
  updateBoilerTypes as updateBoilerTypesAction,
  addBoilerTypes as addBoilerTypesAction,
} from '../../../redux/actions/boilerTypesActions';
import { bindActionCreators } from 'redux';
import EditBoilerType from './EditBoilerType';
import Modal from '@material-ui/core/Modal';

const BoilerTypesList = ({
  boilertypes,
  getBoilerTypes,
  deleteBoilerTypes,
  updateBoilerTypes,
  addBoilerTypes,
}) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getBoilerTypes();
  }, [getBoilerTypes]);

  const addBoilerType = (boilertype) => {
    addBoilerTypes(boilertype);
  };

  const updateCurBoilerTypes = (boilertype) => {
    updateBoilerTypes(boilertype);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <table className={styles.boilerTypesTable}>
        <thead>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {boilertypes &&
            boilertypes.map((boilert) => (
              <tr className={styles.tableRow} key={boilert._id}>
                <td>{boilert._id}</td>
                <td>{boilert.name}</td>
                <td>{boilert.description}</td>
                <td>
                  <EditBoilerType
                    className={styles.btnEdit}
                    currentBoilerType={boilert}
                    updateBoilerTypes={updateCurBoilerTypes}
                  />
                </td>
                <td>
                  <button
                    className={styles.btnDel}
                    onClick={ () => { handleOpen(); setId(boilert._id) } }
                  >
                    <i className="far fa-trash-alt btn-delete"></i>
                  </button>
                </td>
              </tr>
            ))}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Delete Boiler Type"
            className="modal"
          >
            <div className="edit-form">
              <button
                onClick={() => {
                  handleClose();
                  deleteBoilerTypes(id);
                }}
              >
                Confirm Delete
              </button>
              <button type="submit" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </Modal>
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilerTypes: getBoilerTypesAction,
      deleteBoilerTypes: deleteBoilerTypesAction,
      updateBoilerTypes: updateBoilerTypesAction,
      addBoilerTypes: addBoilerTypesAction,
    },
    dispatch
  );
};
const mapStateToProps = (state) => {
  return {
    boilertypes: state.BoilerTypes.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypesList);
