import React, { useState } from 'react';
import boilers from './Boilers.json';
import BoilersTable from './BoilersTable';
import AddBoiler from './AddBoiler';
import './Boilers.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBoiler as postBoilerAction } from '../../../redux/actions/Boilers.actions';

const Boilers = ({ postBoiler }) => {
  const initialBoiler = {
    id: null,
    idType: '',
    startTime: '',
    endTime: '',
    monthlyHours: '',
  };

  const postNewBoiler = (boiler) => {
    postBoiler(boiler);
  };

  const [boiler, setBoiler] = useState(boilers);
  const [currentBoiler, setCurrentBoiler] = useState(initialBoiler);

  // EDIT BOILER
  const editBoiler = (id, boiler) => {
    setCurrentBoiler(boiler);
  };

  const updateBoiler = (newBoiler) => {
    setBoiler(
      boilers.map((boiler) =>
        boiler.id === currentBoiler.id ? newBoiler : boiler
      )
    );
  };

  //DELETE BOILER
  const deleteBoiler = (id) =>
    setBoiler(boiler.filter((boiler) => boiler.id !== id));

  return (
    <div>
      <BoilersTable
        boiler={boiler}
        deleteBoiler={deleteBoiler}
        editBoiler={editBoiler}
      />
      <div>
        <AddBoiler postBoiler={postNewBoiler} boiler={boiler} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      postBoiler: postBoilerAction,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    boilers: state.boilers.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);