import React, { useState } from 'react';
import boilerTypesData from './boilertypesData.json';
import BoilerTypesList from './BoilerTypesList';
import AddBoilerType from './AddBoilerType'
import EditBoilerType from './EditBoilerType'
import './boilerTypes.css'


const BoilerTypes = () => {

  const initialBoilerType = {
    id: null,
    name: '',
    description: '',
  };
  
  const [boilerType, setBoilerType] = useState(boilerTypesData);
  const [edit, setEdit] = useState(false);
  const [currentBoilerType, setCurrentBoilerType] = useState(initialBoilerType);

  // ADD Building
  const addBoilerType = (boilerType) => {
    boilerType.id = boilerTypesData.length + 1;
    setBoilerType([...boilerTypesData, boilerType]);
  };

  // EDIT Building
  const editBoilerType = (id, boilerType) => {
    setEdit(true);
    setCurrentBoilerType(boilerType);
  };
  const updateBoilerType = (newBoilerType) => {
    setBoilerType(
      boilerTypesData.map((boilerType) =>
      boilerType.id === currentBoilerType.id ? newBoilerType : boilerType
      )
    );
    setEdit(false);
  };

  //DELETE Building
  const deleteBoilerType = (id) =>
  setBoilerType(boilerType.filter((boilerType) => boilerType.id !== id));


  return (
    <div>
      <h1>Boiler Types</h1>
      <div className= "list">
        <BoilerTypesList 
          boilerTypesData={boilerTypesData}
          deleteBoilerType={deleteBoilerType}
          editBoilerType={editBoilerType} />
      </div>
      {edit ? (
        <div>
          <EditBoilerType
            currentBoilerType={currentBoilerType}
            setEdit={setEdit}
            updateBoilerType={updateBoilerType}
          />
        </div>
      ) : (
        <div>
          <AddBoilerType addBoilerType={addBoilerType} />
        </div>
      )}
    </div>
  );
};

export default BoilerTypes;
