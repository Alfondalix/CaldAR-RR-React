import React from 'react';

const BuildingTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Boilers</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.building.map((building) => (
          <tr key={building.id}>
            <td>{building.id}</td>
            <td>{building.fullName}</td>
            <td>{building.address}</td>
            <td>{building.boilers}</td>
            <td>{building.phoneNumber}</td>
            <td>
              <button onClick={() => props.editBuilding(building.id, building)}>
                edit
              </button>
            </td>
            <td>
              <button onClick={() => props.deleteBuilding(building.id)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BuildingTable;
