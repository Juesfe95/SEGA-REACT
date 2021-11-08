import React, { useEffect, useState } from 'react';
import Tablas from '../../components/Tablas/Tablas';
import * as constants from '../../Constant';
import axios from 'axios';
import filterFactory, { textFilter, selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import * as ReactBootstrap from 'react-bootstrap';
import { Container, Col, Row } from "react-bootstrap";
import NavbarAndSidebar from '../../components/navbarAndSidebar/navbarAndSidebar'


function Subestaciones() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const toggleShow = () => setShow((s) => !s);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const data = await axios.get(
                "http://10.240.238.94:8080/epsa-api/api/subestacion/listar-todas", {
                headers: { "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN') }
            }
            );
            setData(data.data.objeto_respuesta);
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    };

    const columns = [
        { dataField: "nombre", text: "Nombre de la estación" },
        { dataField: "zonaId.nombre", text: "Zona" },
        { dataField: "ciudadId.nombre", text: "Ciudad" },
        { dataField: "id", text: "Número de fallas" }
    ];

    useEffect(() => {
        getData();
    }, []);

    const rowEvents = {
        onClick: (e, row) => {
            sessionStorage.setItem('SUBESTACION_SELECCIONADO', JSON.stringify(row));
            window.location.href = constants.SUBESTACION;
        }
    }

    return (
        <div>
            <NavbarAndSidebar
                show={show}
                handleClose={handleClose}
                toggleShow={toggleShow}
            />
            <div style={{marginLeft:"6.5rem" ,width:"90%"}}>
                <Row>
                    <Col>
                        <div className="sega_breadcrumb" >
                            <a href={constants.DASHBOARD} style={{marginTop:'10rem'}} className="sega_breadcrumb-item">Home</a>
                            <a href="#!" className="sega_breadcrumb-item">Subestaciones </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="sega_h1 sega_primaryTypoColor-text" style={{ marginLeft: '0.57rem', marginBottom:'1.5rem' }}>
                            Subestaciones
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon" style={{ marginLeft: '1.42rem' }}>
                                <i className="material-icons-outlined">help_outline</i>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    loading ? (
                        <Tablas keyField={columns[0].dataField} columns={columns} data={data} filter={filterFactory()} rowEvents={rowEvents} />
                    ) : (
                        <ReactBootstrap.Spinner animation="border" />
                    )
                }
            </div>

        </div>
    )
}

export default Subestaciones
