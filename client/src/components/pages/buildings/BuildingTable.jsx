import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getBuildings,
  postBuilding,
  deleteBuilding,
  putBuilding,
} from '../../../redux/actions/buildingsActions';

const BuildingTable = (props) => {
  useEffect(() => {
    getBuildings();
  }, []);

  return (
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
        <tbody classname="table-body">
          {props.buildings.list.map((building) => (
            <tr className="table-row" key={building.id}>
              <td>{building.id}</td>
              <td>{building.fullName}</td>
              <td>{building.address}</td>
              <td>[{building.boilers.join('-')}]</td>
              <td>{building.phoneNumber}</td>
              <td>
                <button
                  className="btn-del"
                  onClick={() => props.editBuilding(building.id, building)}
                >
                  <i class="far fa-edit btn-edit"></i>
                </button>

                <button
                  className="btn-edi"
                  onClick={() => props.deleteBuilding(building.id)}
                >
                  <i className="far fa-trash-alt btn-delete"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBuildings,
      deleteBuilding,
      postBuilding,
      putBuilding,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  buildings: state.buildings,
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingTable);
