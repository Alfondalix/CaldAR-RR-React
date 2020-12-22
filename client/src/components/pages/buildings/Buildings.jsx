import React, { useState } from 'react';
import buildings from './buildings.json';
import BuildingTable from './BuildingTable';
import AddBuilding from './AddBuilding';
import EditBuilding from './EditBuilding';

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

  // ADD Building
  const addBuilding = (building) => {
    building.id = buildings.length + 1;
    setBuilding([...buildings, building]);
  };

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

  //DELETE Building
  const deleteBuilding = (id) =>
    setBuilding(building.filter((user) => user.id !== id));

  return (
    <div>
      <h1>Buildings</h1>
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
      <BuildingTable
        building={building}
        deleteBuilding={deleteBuilding}
        editBuilding={editBuilding}
      />
    </div>
  );
};

export default Buildings;
