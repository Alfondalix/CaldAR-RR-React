import { connect } from 'react-redux';
import React, { useState } from 'react';

import { bindActionCreators } from 'redux';
import BoilerTypesList from './BoilerTypesList';
import AddBoilerType from './AddBoilerType';
import {
  addBoilerTypes as addBoilerTypesAction,
} from '../../../redux/actions/boilerTypesActions';


const BoilerTypes = (boilertypes, addBoilerTypes) => {
  const initialBoilerType = {
    id: null,
    name: '',
    description: '',
  };

  const addNewBoilerTypes = (boilertype) => {
    addBoilerTypes(boilertype);
  };

  //const [edit, setEdit] = useState(false);
  const [currentBoilerType, setCurrentBoilerType] = useState(initialBoilerType);
  
  /*// ADD Building
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
*/
  //DELETE Building
  /*const deleteBoilerType = (id) =>
    setBoilerType(boilerType.filter((boilerType) => boilerType.id !== id));*/

  return (
    <div>
      <div className="list">
        <BoilerTypesList
          /*boilerTypesData={boilerType}
          deleteBoilerType={deleteBoilerType}
          editBoilerType={editBoilerType}*/
        />
      </div>
      <div>
        <AddBoilerType addBoilerTypes = {addNewBoilerTypes} boilertypes={boilertypes} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
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
export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);

