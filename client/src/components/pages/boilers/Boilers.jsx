import React, { useState } from 'react';
import boilers from './Boilers.json';
import BoilersTable from './BoilersTable';
import AddBoiler from './AddBoiler';
import EditBoiler from './EditBoiler';
import './Boilers.css'

const Boilers = () => {
  const initialBoiler = {
    id: null,
    idType: '',
    startTime: '',
    endTime: '',
    monthlyHorus: '',
  };

  const [boiler, setBoilers] = useState(boilers);
  const [edit, setEdit] = useState(false);
  const [currentBoiler, setCurrentBoiler] = useState(initialBoiler);

  // ADD BOILER
  const addBoiler = (boiler) => {
    boiler.id = boilers.length + 1;
    setBoilers([...boilers, boiler]);
  };

  // EDIT BOILER
  const editBoiler = (id, boiler) => {
    setEdit(true);
    setCurrentBoiler(boiler);
  };
  const updateBoiler = (newBoiler) => {
    setBoilers(
      boilers.map((boiler) =>
        boiler.id === currentBoiler.id ? newBoiler : boiler
      )
    );
    setEdit(false);
  };

  //DELETE BOILER
  const deleteBoiler = (id) =>
    setBoilers(boiler.filter((user) => user.id !== id));

    return (
      <div>
        <BoilersTable
          boiler={boiler}
          deleteBoiler={deleteBoiler}
          editBoiler={editBoiler}
        />
        {edit ? (
          <div>
            <EditBoiler
              currentBoiler={currentBoiler}
              setEdit={setEdit}
              updateBoiler={updateBoiler}
            />
          </div>
        ) : (
          <div>
            <AddBoiler addBoiler={addBoiler} />
          </div>
        )}
      </div>
    );
  };

export default Boilers;