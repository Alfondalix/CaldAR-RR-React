import React, { useState } from 'react';
import buildings from './buildings.json';
import BuildingTable from './BuildingTable';
import AddBuilding from './AddBuilding';
import EditBuilding from './EditBuilding';
import './Buildings.css';

const Buildings = () => {
  const initialBuilding = {
    id: null,
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
  };

  const [building, setBuilding] = useState(buildings);
  const [edit, setEdit] = useState(false);
  const [currentBuilding, setCurrentBuilding] = useState(initialBuilding);

  // EDIT Building
  const editBuilding = (id, building) => {
    setEdit(true);
    setCurrentBuilding(building);
  };
  const updateBuilding = (newBuilding) => {
    setBuilding(
      buildings.map((building) =>
        building.id === currentBuilding.id ? newBuilding : building
      )
    );
    setEdit(false);
  };

  // ADD Building
  const addBuilding = (newbuilding) => {
    newbuilding.id = building.length + 1;
    setBuilding([...building, newbuilding]);
    console.log(newbuilding);
  };

  //DELETE Building
  const deleteBuilding = (id) =>
    setBuilding(building.filter((building) => building.id !== id));

  return (
    <div className="buildings-div">
      <BuildingTable
        building={building}
        deleteBuilding={deleteBuilding}
        editBuilding={editBuilding}
      />
      {edit ? (
        <div>
          <EditBuilding
            currentBuilding={currentBuilding}
            setEdit={setEdit}
            updateBuilding={updateBuilding}
          />
        </div>
      ) : (
        <div>
          <AddBuilding addBuilding={addBuilding} />
        </div>
      )}
    </div>
  );
};

export default Buildings;
