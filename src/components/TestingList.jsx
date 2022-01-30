import React from "react";
import Table from 'react-bootstrap/Table';
import { TestingItem } from "./TestingItem";


export function TestingList({testings}){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nº Rol</th>
                    <th>Nombre Paciente</th>
                    <th>Fecha Hosp</th>
                    <th>Fecha Alta</th>
                    <th>Fecha Previs...</th>
                    <th>Codigo Pres...</th>
                    <th>Accion</th>
                    <th>Nº</th>
                    <th>Tipo PAM</th>
                </tr>
            </thead>
            <tbody>
                {testings.map((testing) => (
                    <TestingItem testing={testing}/>
                ))}
            </tbody>
        </Table>
    )
}