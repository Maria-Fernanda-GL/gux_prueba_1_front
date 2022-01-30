import React from "react";
import { Form, Button } from "react-bootstrap";


export function TestingFilter(){
    return(
        <Form>
            <Form.Group  className="mb-3" controlId="rol">
                <Form.Label>Rol</Form.Label>
                <Form.Control type="text" placeholder="Enter Rol"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="paciente">
                <Form.Label>Paciente</Form.Label>
                <Form.Control type="text" placeholder="Paciente" />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="prevision">
                <Form.Label>Prevision</Form.Label>
                <Form.Control type="text" placeholder="Enter Prevision"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Enter estado" />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="date_start">
                <Form.Label>Fecha alta desde</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date_end">
                <Form.Label>Fecha alta hasta</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Limpiar
            </Button>

            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    )

}