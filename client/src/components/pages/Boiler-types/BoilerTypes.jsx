import { connect } from 'react-redux';
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import BoilerTypesList from './BoilerTypesList';
import AddBoilerType from './AddBoilerType';
import {
  addBoilerTypes as addBoilerTypesAction,
} from '../../../redux/actions/boilerTypesActions';

const BoilerTypes = ({boilertypes, addBoilerTypes}) => {
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
      <div className="list">
        <BoilerTypesList
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

