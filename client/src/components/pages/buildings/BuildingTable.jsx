import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditBuilding from './EditBuilding.jsx';
import Modal from '@material-ui/core/Modal';
import {
  getBuildings as getBuildingsAction,
  deleteBuilding as deleteBuildingAction,
  putBuilding as putBuildingAction,
} from '../../../redux/actions/buildingsActions';

const BuildingTable = ({
  buildings,
  getBuildings,
  deleteBuilding,
  putBuilding,
}) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getBuildings();
  }, [getBuildings]);

  const putCurrentBuilding = (building) => {
    putBuilding(building);
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
        <table className="buildings-table">
          <thead>
            <tr className="table-titles">
              <th>ID</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Boilers</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buildings &&
              buildings.map((building) => (
                <tr className="table-row" key={building._id}>
                  <td>{building._id}</td>
                  <td>{building.fullName}</td>
                  <td>{building.address}</td>
                  <td>{building.boilers}</td>
                  <td>{building.phoneNumber}</td>
                  <td className="btn-container">
                    <EditBuilding
                      currentBuilding={building}
                      putCBuilding={putCurrentBuilding}
                      className="btn-edi"
                    />

                    <button
                      className="btn-edi"
                      onClick={() => {
                        handleOpen();
                        setId(building._id);
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
              aria-labelledby="Delete Building"
              className="modal"
            >
              <div className="edit-form">
                <button
                  onClick={() => {
                    deleteBuilding(id);
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
      getBuildings: getBuildingsAction,
      deleteBuilding: deleteBuildingAction,
      putBuilding: putBuildingAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingTable);
