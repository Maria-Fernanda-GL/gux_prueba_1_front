import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import { TestingItem } from "./TestingItem";



export function TestingList(){
    const URL_API = '';
    const URL_TOKEN = '';
    const [testings, setTestings] = useState(null);

    var obj = {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': URL_TOKEN
        }
      }

    async function fetchTestingData() {
        const response = await fetch(URL_API, obj);
        setTestings(await response.json());
    }

    useEffect(() => {
        fetchTestingData();
      }, []);
    
      if (!testings) {
        return "loading...";
    }


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