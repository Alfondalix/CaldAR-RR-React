import React from 'react';


const BoilerTypesList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.boilerTypesData.map((boilertype) => (
                <tr key={boilertype.id}>
                    <td>{boilertype.id}</td>
                    <td>{boilertype.name}</td>
                    <td>{boilertype.description}</td>
                    <td>
                        <button onClick={() => props.editBoilerType(boilertype.id, boilertype)}>
                            Edit
                        </button>
                    </td>
                    <td>
                        <button onClick={() => props.deleteBoilerType(boilertype.id)}>
                            Delete
                        </button>   
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BoilerTypesList;
