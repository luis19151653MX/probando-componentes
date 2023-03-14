import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function UserProfile() {
    const [userId, setUsuarioId] = useState(4);
    const [usuario, setUsuario] = useState({});
    useEffect(() => {
        loadUser()
    }, [])


    const loadUser = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", userId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/show_usuarios", data, config)
            .then(response => {
                console.log(response.data);
                setUsuario(response.data);
            }).catch(error => {
                console.log(error);
            });
    }



    return (
        <Container>
            <br /> <br /> <br />
            <h1 align="center"> <span >Perfil del usuario</span></h1>
            <br />
            <Row>
                <Col>
                    <div class="card text-left">
                        <div class="card-header"><h3>
                            {usuario.nombre}
                        </h3>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title"><b>Información adicional del usuario:</b></h4>
                            <p class="card-text"><b>Teléfono: </b> {usuario.telefono}</p>
                            <p class="card-text"><b>Dirección: </b> {usuario.direccion}</p>
                            <p class="card-text"><b>E-mail: </b> {usuario.email}</p>
                            <p class="card-text"><b>Fecha de nacimiento: </b> {usuario.fecha_cumpleaños}</p>
                            <p class="card-text"><b>Tipo de cliente: </b> {usuario.tipo}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}