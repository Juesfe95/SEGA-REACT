import React, { useEffect, useState } from 'react';
import Tablas from '../../../components/Tablas/Tablas';
import * as constants from '../../../Constant';
import axios from 'axios';
import filterFactory from 'react-bootstrap-table2-filter';
import * as ReactBootstrap from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import NavbarAndSidebar from '../../../components/navbarAndSidebar/navbarAndSidebar'
import './style.css'

function Subestacion() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const toggleShow = () => setShow((s) => !s);

    const [data, setData] = useState([]);
    const [indiceSalud, setindiceSalud] = useState([]);
    const [loading, setLoading] = useState(false);
    const [subestacionSeleccionado, setSubestacionSeleccionado] = useState([]);
    let subestacionSeleccionadoSessionStorage;
    const getData = async () => {
        try {
            subestacionSeleccionadoSessionStorage = JSON.parse(sessionStorage.getItem('SUBESTACION_SELECCIONADO'));
            const data = await axios.get(
                "http://10.240.238.94:8080/epsa-api/api/transformador/listar-asociados-subestacion", {
                headers: {
                    "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN')
                },
                params: {
                    "idSubestacion": subestacionSeleccionadoSessionStorage.id
                }
            }
            );
            setData(data.data.objeto_respuesta);
            setSubestacionSeleccionado(subestacionSeleccionadoSessionStorage);
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    };

    const rowEvents = {
        onClick: (e, row) => {
            sessionStorage.setItem('TRANSFORMADOR_SELECCIONADO', JSON.stringify(row));
            window.location.href = constants.DETALLETRANSFORMADOR;
        }
    }

    const getIndiceSalud = async () => {
        try {
            const data = await axios.get(
                "http://10.240.238.94:8080/epsa-api/api/indice-salud-limites-condiciones-controller/listar-limites", {
                headers: { "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN') }
            }
            );
            setindiceSalud(data.data.objeto_respuesta);
        } catch (e) {
            console.log(e);
        }
    };

    const columns = [
        { dataField: "activo", text: "Activo" },
        { dataField: "nombre", text: "Nomenclatura operativa" },
        { dataField: "serial", text: "Serial" },
        { dataField: "anoFabricacion", text: "Año" },
        {
            dataField: "clasificacionFalla", text: "Criticidad",
            attrs: function callback(cell, row, rowIndex, colIndex) {
                if (cell === 'Muy alta criticidad') {
                    return { 'Style': 'color: #FD3434' }
                }
                else if (cell === 'Media criticidad') {
                    return { 'Style': 'color: #ffc120' }
                }
                else if (cell === 'Baja criticidad') {
                    return { 'Style': 'color: #6FC248' }
                }
            }
        },
        {
            dataField: "probabilidadFalla", text: "Probabilidad de falla",
            formatter: percentageFormatter,
            attrs: function callback(cell, row, rowIndex, colIndex) {
                if (parseFloat(cell) <= indiceSalud.limiteInferior) {
                    return { 'Style': 'color: #FD3434' }
                }
                else if (parseFloat(cell) > indiceSalud.limiteInferior && parseFloat(cell) < indiceSalud.limiteSuperior) {
                    return { 'Style': 'color: #ffc120' }
                }
                else {
                    return { 'Style': 'color: #6FC248' }
                }
            },

        },
        {
            dataField: "indiceSalud", text: "Indice de salud",
            formatter: percentageFormatter,
            attrs: function callback(cell, row, rowIndex, colIndex) {
                if (parseFloat(cell) <= indiceSalud.limiteInferior) {
                    return { 'Style': 'color: #FD3434' }
                }
                else if (parseFloat(cell) > indiceSalud.limiteInferior && parseFloat(cell) < indiceSalud.limiteSuperior) {
                    return { 'Style': 'color: #ffc120' }
                }
                else {
                    return { 'Style': 'color: #6FC248' }
                }
            }
        },
        { dataField: "fallaPonderada", text: "Número de fallas" },
        { dataField: "fallaPonderada", text: "Fallas / hora (λ)" },
        { dataField: "fallaPonderada", text: "Fallas / año (λ)" },
        { dataField: "fallaPonderada", text: "MTBF (h)" },
        { dataField: "fallaPonderada", text: "MTTR (h)" },
        { dataField: "fallaPonderada", text: "Ai" },
    ];

    useEffect(() => {
        getData();
        getIndiceSalud();
    }, []);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <div>
            <NavbarAndSidebar
                show={show}
                handleClose={handleClose}
                toggleShow={toggleShow}
            />
            <div className="dashboardPrincipal">
                <Row>
                    <Col>
                        <div className="sega_breadcrumb">
                            <a style={{marginTop:'10rem'}} href={constants.DASHBOARD} className="sega_breadcrumb-item">Home</a>
                            <a href={constants.SUBESTACIONES} className="sega_breadcrumb-item">subestaciones</a>
                            <a href="#!" className="sega_breadcrumb-item">subestacion {subestacionSeleccionado.nombre}</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="sega_h1 sega_primaryTypoColor-text" style={{ marginLeft: '0.57rem', marginBottom:'1.5rem' }}>
                            Subestacion
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon" style={{ marginLeft: '1.42rem' }}>
                                <i className="material-icons-outlined">help_outline</i>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    loading ? (
                        <Tablas title={'Subestación: ' + capitalizeFirstLetter(subestacionSeleccionado.nombre)} keyField={columns[0].dataField} columns={columns} data={data} filter={filterFactory()} rowEvents={rowEvents} />
                    ) : (
                        <ReactBootstrap.Spinner animation="border" />
                    )
                }

            </div>

        </div>
    )
}

function percentageFormatter(cell) {
    return (
        <p>{Math.round(cell * 100) / 100}%</p>
    );
}

export default Subestacion;