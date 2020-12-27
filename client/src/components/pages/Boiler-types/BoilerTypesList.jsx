import React from 'react';
import styles from './boilerTypes.module.css';

const BoilerTypesList = (props) => {
    return (
        <div className= {styles.container}>
            <table className= {styles.boilerTypesTable}>
                <thead>
                    <tr className= {styles.tableTitles}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.boilerTypesData.map((boilertype) => (
                    <tr className= {styles.tableRow} key={boilertype.id}>
                        <td>{boilertype.id}</td>
                        <td>{boilertype.name}</td>
                        <td>{boilertype.description}</td>
                        <td>
                            <button 
                                className= {styles.btnEdit}
                                onClick={() => props.editBoilerType(boilertype.id, boilertype)}
                            >
                                <i class="far fa-edit btn-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button
                                className= {styles.btnDel}
                                onClick={() => props.deleteBoilerType(boilertype.id)}
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

export default BoilerTypesList;
