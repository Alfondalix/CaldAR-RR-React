import React, { useState } from 'react';
import buildings from './buildings.json';
import BuildingTable from './BuildingTable';
import AddBuilding from './AddBuilding';
import './Buildings.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBuilding as postBuildingAction } from '../../../redux/actions/buildingsActions';

const Buildings = ({ postBuilding }) => {
  const initialBuilding = {
    id: null,
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
  };

  const postNewBuilding = (building) => {
    postBuilding(building);
  };

  const [building, setBuilding] = useState(buildings);
  const [currentBuilding, setCurrentBuilding] = useState(initialBuilding);

  // EDIT Building
  const editBuilding = (id, building) => {
    setCurrentBuilding(building);
  };

  const updateBuilding = (newBuilding) => {
    setBuilding(
      buildings.map((building) =>
        building.id === currentBuilding.id ? newBuilding : building
      )
    );
  };

  return (
    <div>
      <BuildingTable editBuilding={editBuilding} />
      <div>
        <AddBuilding postBuilding={postNewBuilding} building={building} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      postBuilding: postBuildingAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
