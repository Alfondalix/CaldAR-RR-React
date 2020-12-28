import React from 'react';
import styles from './BoilersTable.module.css';

const BoilersTable = (props) => {
  return (
    <table className={styles.container}>
      <thead className={styles.table}>
        <tr className={styles.table}>
          <th>ID</th>
          <th>Type ID Boiler</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Montlhy Hours</th>
        </tr>
      </thead>
      <tbody>
        {props.boiler.map((boiler) => (
          <tr key={boiler.id}>
            <td>{boiler.id}</td>
            <td>{boiler.idType}</td>
            <td>{boiler.startTime}</td>
            <td>{boiler.endTime}</td>
            <td>{boiler.monthlyHours}</td>
            <td>
              <button onClick={() => props.editBoiler(boiler.id, boiler)}>
                Update
              </button>
            </td>
            <td>
              <button onClick={() => props.deleteBoiler(boiler.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BoilersTable;