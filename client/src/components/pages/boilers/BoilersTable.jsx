import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditBoiler from './EditBoiler.jsx';

import {
  getBoilers as getBoilersAction,
  deleteBoiler as deleteBoilerAction,
  putBoiler as putBoilerAction,
} from '../../../redux/actions/Boilers.actions';
import { Modal } from '@material-ui/core';

const BoilersTable = ({ boilers, getBoilers, putBoiler, deleteBoiler }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getBoilers();
  }, [getBoilers]);

  const putThisBoiler = (boiler) => {
    putBoiler(boiler);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="table-container">
        <table className="boilers-table">
          <thead>
            <tr className="table-titles">
              <th></th>
              <th>ID</th>
              <th>Type ID Boiler</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Monthly Hours</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {boilers &&
              boilers.map((boiler) => (
                <tr className="table-row" key={boiler._id}>
                  <td>{boiler._id}</td>
                  <td>{boiler.idType}</td>
                  <td>{boiler.startTime}</td>
                  <td>{boiler.endTime}</td>
                  <td>{boiler.monthlyHours}</td>
                  <td>
                    <EditBoiler
                      currentBoiler={boiler}
                      putThBoiler={putThisBoiler}
                      className="btn-edi"
                    />

                    <button
                      className="btn-edi"
                      onClick={() => {
                        handleOpen();
                        setId(boiler._id);
                      }}
                    >
                      <i className="far fa-trash-alt btn-delete"></i>
                    </button>
                  </td>
                </tr>
              ))}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="Delete Boiler"
              className="modal"
            >
              <div className="edit-fom">
                <button
                  onClick={() => {
                    deleteBoiler(id);
                    handleClose();
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
    </>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBoilers: getBoilersAction,
      deleteBoiler: deleteBoilerAction,
      putBoiler: putBoilerAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    boilers: state.boilers.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilersTable);
