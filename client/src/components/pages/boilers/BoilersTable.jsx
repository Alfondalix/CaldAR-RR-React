import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditBoiler from './EditBoiler.jsx';

import {
  getBoilers as getBoilersB,
  deleteBoiler as deleteBoilerB,
  putBoiler as putBoilerB,
} from '../../../redux/actions/Boilers.actions';

const BoilersTable = ({ boilers, getBoilers, putBoiler, deleteBoiler }) => {
  useEffect(() => {
    getBoilers();
  }, [getBoilers]);

  const putThisBoiler = (boiler) => {
    putBoiler(boiler);
  };

  return (
    <div className="table-container">
      <table className="boilers-table">
        <thead>
          <tr className="table-titles">
            <th></th>
            <th>ID</th>
            <th>Type ID Boiler</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Montlhy Hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {boilers &&
            boilers.map((boiler) => (
              <tr className="table-row" key={boiler._id}>
                <td>{boiler._id}</td>
                <td>{boiler.idType}</td>
                <td>{boiler.startTime}</td>
                <td>{boiler.endTime}</td>
                <td>{boiler.monthlyHours}</td>
                <td>
                  <EditBoiler
                    currentBoiler={boiler}
                    putThBoiler={putThisBoiler}
                    className="btn-edi"
                  />
                  <button
                    className="btn-edi"
                    onClick={() => deleteBoiler(boiler._id)}
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBoilers: getBoilersB,
      deleteBoiler: deleteBoilerB,
      putBoiler: putBoilerB,
    },
    dispatch
  );
const mapStateToProps = (state) => ({
  boilers: state.boilers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilersTable);
