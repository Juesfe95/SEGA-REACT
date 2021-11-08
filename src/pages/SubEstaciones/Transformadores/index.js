import React, { useEffect, useState } from 'react';
import Tablas from '../../../components/Tablas/Tablas';
import axios from 'axios';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import * as ReactBootstrap from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import NavbarAndSidebar from "../../../components/navbarAndSidebar/navbarAndSidebar";
import * as constants from '../../../Constant';

let qualityFilter;

function Transformadores() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const toggleShow = () => setShow((s) => !s);

    const [data, setData] = useState([]);
    const [indiceSalud, setindiceSalud] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const data = await axios.get(
                "http://10.240.238.94:8080/epsa-api/api/transformador/listar-sin-paginar", {
                headers: { "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN') }
            }
            );
            setData(data.data.objeto_respuesta);
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    };

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

    const selectOptions = {
        "En Servicio": "En Servicio",
        "Fuera de Servicio": "Fuera de Servicio",
        'En Reparación': 'En Reparación',
        'Reserva': 'Reserva',
        'Todos': 'Todos',
        '': '',
    };

    const buttonsSearchLevel = [
        {
            name: 'Ver historial IS',
            icon: 'chevron_right',
            buttonClass: 'sega_button-secondary sega_button-icon-right',
            iconClass: 'material-icons sega_icon-right',
            link: '#!',
            position: 'right'
        },
        {
            name: 'Ver movimientos',
            icon: 'chevron_right',
            buttonClass: 'sega_button-secondary sega_button-icon-right',
            iconClass: 'material-icons sega_icon-right',
            link: '#!',
            position: 'right'
        }];

    const columns = [
        { dataField: "serial", text: "Serial" },
        { dataField: "nombre", text: "Nomenclatura operativa" },
        { dataField: "subestacionId.ciudadId.nombre", text: "Subestación" },
        { dataField: "marcaId.nombre", text: "Marca" },
        {
            dataField: "estadoOperativo", text: "Estado operativo",
            formatter: cell => selectOptions[cell],
            filter: selectFilter({
                options: selectOptions,
                getFilter: (filter) => {
                    qualityFilter = filter;

                }
            }),
            attrs: function callback(cell, row, rowIndex, colIndex) {
                if (cell === 'Fuera de Servicio') {
                    return { 'Style': 'color: #FD3434' }
                }
                else if (cell === 'En Reparación') {
                    return { 'Style': 'color: #ffc120' }
                }
                else if (cell === 'En Servicio') {
                    return { 'Style': 'color: #6FC248' }
                }
            }
        },
        {
            dataField: "clasificacionFalla", text: "Criticidad",
            attrs: function callback(cell) {
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
            dataField: "indiceSalud", text: "Indice de salud",
            attrs: function callback(cell) {
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
    ];

    const [selectChanged, setSelectChanged] = useState("");

    const handleChange = (event) => {
        try {
            setSelectChanged({ value: event.target.value });
            event.preventDefault();
            qualityFilter(event.target.value);
        } catch (error) {
            console.log(error);
        }
    }

    const customSelect = [
        < div class="sega_select sega_select-filter" style={{ marginRight: '1rem' }}>
            <select value={selectChanged.value} onChange={handleChange}>
                <option value="" disabled selected>Filtrar por</option>
                <option value="En Servicio" >En Servicio</option>
                <option value="Fuera de Servicio">Fuera de Servicio</option>
                <option value="En Reparación">En Reparación</option>
                <option value="Reserva">Reserva</option>
                <option value="Todos">Todos</option>
                <option value=""></option>
            </select>
        </div >
    ]

    useEffect(() => {
        getData();
        getIndiceSalud();
    }, []);

    const rowEvents = {
        onClick: (e, row) => {
            sessionStorage.setItem('TRANSFORMADOR_SELECCIONADO', JSON.stringify(row));
            window.location.href = constants.DETALLETRANSFORMADOR;
        }
    }

    return (
        <div>
            <NavbarAndSidebar
                show={show}
                handleClose={handleClose}
                toggleShow={toggleShow}
            />
            <div style={{ marginLeft: '6rem', paddingTop: '10rem', width:'91%' }}>
                <Row>
                    <Col>
                        <div className="sega_breadcrumb">
                            <a href={constants.DASHBOARD}  className="sega_breadcrumb-item">Home</a>
                            <a href="#!" className="sega_breadcrumb-item">Transformadores</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="sega_h1 sega_primaryTypoColor-text" style={{ marginLeft: '0.57rem', marginBottom: '1rem' }}>
                            Transformadores
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon" style={{ marginLeft: '1.42rem' }}>
                                <i className="material-icons-outlined">help_outline</i>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    loading ? (
                        <Tablas keyField={columns[0].dataField}
                            columns={columns}
                            data={data}
                            filter={filterFactory()}
                            buttonsSearchLevel={buttonsSearchLevel}
                            haveDownloadButton={true}
                            rowEvents={rowEvents}
                        />
                    ) : (
                        <ReactBootstrap.Spinner animation="border" />
                    )
                }
            </div>
        </div>
    )
}

export default Transformadores;
