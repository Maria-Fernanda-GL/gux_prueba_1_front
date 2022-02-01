import React, {useState}  from "react";
import { Form, Button } from "react-bootstrap";


export function TestingFilter(){
    const default_filter = {
        rol: '',
        patient: '',
        prevision: '',
        estado: '',
        date_start: '',
        date_end: ''
    }

    var [filter, setFilter] = useState(default_filter);

    const handleInputChange = (e) => {
        setFilter({...filter, [e.target.name] : e.target.value})
    };

    const resetForm = () => {
        setFilter(default_filter);
    };

    return(
        <Form>
            <Form.Group  className="mb-3" controlId="rol">
                <Form.Label>Rol</Form.Label>
                <Form.Control type="text" placeholder="Enter Rol" name="rol" value={filter.rol} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="paciente">
                <Form.Label>Paciente</Form.Label>
                <Form.Control type="text" placeholder="Paciente" name="patient" value={filter.patient} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group  className="mb-3" controlId="prevision">
                <Form.Label>Prevision</Form.Label>
                <Form.Control type="text" placeholder="Enter Prevision" name="prevision" value={filter.prevision} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Enter estado" name="estado" value={filter.estado} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group  className="mb-3" controlId="date_start" >
                <Form.Label>Fecha alta desde</Form.Label>
                <Form.Control type="date" name="date_start" value={filter.date_start} onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="date_end">
                <Form.Label>Fecha alta hasta</Form.Label>
                <Form.Control type="date" name="date_end" value={filter.date_end} onChange={handleInputChange}/>
            </Form.Group>

            <Button variant="primary" onClick={resetForm} >
                Limpiar
            </Button>

            <Button variant="primary" >
                Buscar
            </Button>
        </Form>
    )
}