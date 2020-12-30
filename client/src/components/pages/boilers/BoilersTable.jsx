import React from 'react';


const BoilersTable = (props) => {
  return (
    <div className="table-container">
      <table className="boilers-table">
        <thead>
          <tr className="table-titles">
            <th>ID</th>
            <th>Type ID Boiler</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Montlhy Hours</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.boiler.map((boiler) => (
            <tr key={boiler.id}>
              <td>{boiler.id}</td>
              <td>{boiler.idType}</td>
              <td>{boiler.startTime}</td>
              <td>{boiler.endTime}</td>
              <td>{boiler.monthlyHours}</td>
              <td>
                <button
                  className="btn-del"
                  onClick={() => props.editBoiler(boiler.id, boiler)}
                >
                  <i class="far fa-edit btn-edit"></i>
                </button>

                <button
                  className="btn-edi"
                  onClick={() => props.deleteBoiler(boiler.id)}
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

export default BoilersTable;
