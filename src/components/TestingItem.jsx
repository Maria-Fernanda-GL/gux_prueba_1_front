import React from "react";


export function TestingItem({testing}){
    return(
        <tr>
            <td>{testing.num_rol}</td>
            <td>{testing.name_patient}</td>
            <td>{testing.date_hospitalization}</td>
            <td>{testing.date_high}</td>
            <td>{testing.schedule}</td>
            <td>{testing.action}</td>
            <td>{testing.number}</td>
            <td>{testing.num_rol}</td>
            <td>{testing.type_pam}</td>
        </tr>
    )

}