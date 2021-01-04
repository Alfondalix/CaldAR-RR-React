import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './boilerTypes.module.css';
import {
  getBoilerTypes as getBoilerTypesAction,
  deleteBoilerTypes as deleteBoilerTypesAction,
  updateBoilerTypes as updateBoilerTypesAction,
  addBoilerTypes as addBoilerTypesAction,
} from '../../../redux/actions/boilerTypesActions';
import { bindActionCreators } from 'redux';
import EditBoilerType from './EditBoilerType';

const BoilerTypesList = ({boilertypes, getBoilerTypes, deleteBoilerTypes, updateBoilerTypes, addBoilerTypes}) => {

  useEffect(() => {
    getBoilerTypes();
  }, [getBoilerTypes]);

  const addBoilerType = (boilertype) => {
    addBoilerTypes(boilertype);
  };

  const updateCurBoilerTypes = (boilertype) => {
    updateBoilerTypes(boilertype);
  };

  return (
    <div className={styles.container}>
      <table className={styles.boilerTypesTable}>
        <thead>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {boilertypes && boilertypes.map((boilert) => (
            <tr className={styles.tableRow} key={boilert._id}>
              <td>{boilert._id}</td>
              <td>{boilert.name}</td>
              <td>{boilert.description}</td>
              <td>
                <EditBoilerType
                  className={styles.btnEdit}
                  currentBoilerType={boilert}
                  updateBoilerTypes={updateCurBoilerTypes}
                />
              </td>
              <td>
                <button
                  className={styles.btnDel}
                  onClick={() => deleteBoilerTypes(boilert._id)}
                >
                  <i className="far fa-trash-alt btn-delete"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilerTypes: getBoilerTypesAction,
      deleteBoilerTypes: deleteBoilerTypesAction,
      updateBoilerTypes: updateBoilerTypesAction,
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
export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypesList);

