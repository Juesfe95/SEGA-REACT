import React, { useState } from "react";
import NavbarAndSidebar from "../../../components/navbarAndSidebar/navbarAndSidebar";
import { Col, Container, Row } from "react-bootstrap";
const Dashboard = () => {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const toggleShow = () => setShow((s) => !s);

    return (
        <div>
            <NavbarAndSidebar
                show={show}
                handleClose={handleClose}
                toggleShow={toggleShow}
            />
            <Container style={{ marginLeft: '3.5rem' }}>
                <Row>
                    <nav>
                        <div className="sega_breadcrumb">
                            <div className="col s9">
                                <a href="#!" className="sega_breadcrumb-item">
                                    Panel de control
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Col xs={4}>
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Panel de control
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon">
                                <i className="material-icons-outlined">help_outline</i>
                            </div>
                        </div>
                    </Col>
                    <Col xs={1}>
                        <a href="#!" class="sega_button-main">
                            <i class="material-icons sega_icon-right">download</i>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <nav>
                            <div className="sega_select">
                                <select>
                                    <option>Seleccione</option>
                                    <option>Subestaciones</option>
                                    <option>Transformadores</option>
                                    <option>Lineas de alta tensión</option>
                                    <option>Redes MTBT</option>
                                    <option>Sistemas fotovoltáicos</option>
                                </select>
                            </div>
                        </nav>
                    </Col>
                    <Col xs={5} className="sega_switch_col">
                        <div className="sega-box-switch">
                            <b>Total</b>
                            <label className="sega_switch">
                                <input type="checkbox" />
                                <div className="sega_switch-slider"></div>
                            </label>
                        </div>
                        <div className="sega-box-switch">
                            <b>Tolima</b>
                            <label className="sega_switch">
                                <input type="checkbox" />
                                <div className="sega_switch-slider"></div>
                            </label>
                        </div>
                        <div className="sega-box-switch">
                            <b>Valle</b>
                            <label className="sega_switch">
                                <input type="checkbox" />
                                <div className="sega_switch-slider"></div>
                            </label>
                        </div>
                        <div className="sega-box-switch">
                            <b>Caribe</b>
                            <label className="sega_switch">
                                <input type="checkbox" />
                                <div className="sega_switch-slider"></div>
                            </label>
                        </div>
                    </Col>
                </Row>
                <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                    <Row>
                        <Col>
                            <div className="sega_h1 sega_primaryTypoColor-text">
                                Matriz de criticidad
                                <i className="material-icons-outlined sega_mediumGrayColor-text">grain</i>
                                <div id="chartdiv-matriz">
                                    <div class="preloader-wrapper active">
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Dashboard;
