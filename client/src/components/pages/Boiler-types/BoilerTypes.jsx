import { connect } from 'react-redux';
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import BoilerTypesList from './BoilerTypesList';
import AddBoilerType from './AddBoilerType';
import { addBoilerTypes as addBoilerTypesAction } from '../../../redux/actions/boilerTypesActions';
import { StylesProvider } from '@material-ui/core';
import styles from './boilerTypes.module.css';

const BoilerTypes = ({ boilertypes, addBoilerTypes }) => {
  const initialBoilerType = {
    id: null,
    name: '',
    description: '',
  };

  const addNewBoilerTypes = (boilertype) => {
    addBoilerTypes(boilertype);
  };

  const [currentBoilerType, setCurrentBoilerType] = useState(initialBoilerType);

  return (
    <div>
      <h1 className= {styles.tittle}>Boiler Types</h1>
      <div>
        <BoilerTypesList />
      </div>
      <div className= {styles.addContainer}>
        <AddBoilerType
          addBoilerTypes={addNewBoilerTypes}
          boilertypes={boilertypes}
        />
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
