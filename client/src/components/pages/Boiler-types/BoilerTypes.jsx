import React, { useState } from 'react';
import boilerTypesData from './boilertypesData.json';
import BoilerTypesList from './BoilerTypesList';
import AddBoilerType from './AddBoilerType';
import EditBoilerType from './EditBoilerType';
import styles from './boilerTypes.module.css';

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
  const addBoilerType = (boilerTypePar) => {
    boilerTypePar.id = boilerType.length + 1;
    setBoilerType([...boilerType, boilerTypePar]);
  };

  // EDIT Building
  const editBoilerType = (id, boilerType) => {
    setEdit(true);
    setCurrentBoilerType(boilerType);
  };
  const updateBoilerType = (newBoilerType) => {
    setBoilerType(
      boilerType.map((boilerType) =>
        boilerType.id === newBoilerType.id ? newBoilerType : boilerType
      )
    );
    setEdit(false);
  };

  //DELETE Building
  const deleteBoilerType = (id) =>
    setBoilerType(boilerType.filter((boilerType) => boilerType.id !== id));

  return (
    <div>
      <div className="list">
        <BoilerTypesList
          boilerTypesData={boilerType}
          deleteBoilerType={deleteBoilerType}
          editBoilerType={editBoilerType}
        />
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
