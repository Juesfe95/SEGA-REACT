import React from "react";
import "./mesnuStyle.css";
import { Col, Container, Row } from "react-bootstrap";

function GasesDisueltos() {
    return (
        <div>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Información técnica de la prueba de gases disueltos.
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon"></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_breadcrumb">
                        <div className="sega_chip sega_primaryColor-text">
                            <i className="material-icons-outlined">subdirectory_arrow_right</i> Condición gases
                        </div>
                    </div>
                    <div className="sega_breadcrumb">
                        <div className="sega_chip sega_primaryColor-text">
                            <i className="material-icons-outlined">subdirectory_arrow_right</i> Pendiente
                        </div>
                    </div>
                    <div className="sega_breadcrumb">
                        <div className="sega_chip sega_primaryColor-text">
                            <i className="material-icons-outlined">subdirectory_arrow_right</i> Recomendaciones
                        </div>
                    </div>
                    <div className="sega_breadcrumb">
                        <div className="sega_chip sega_primaryColor-text">
                            <i className="material-icons-outlined">subdirectory_arrow_right</i> Histórico
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Ímdice total de salud de gases disueltos
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Recomendaciones prueba de gases disueltos
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Índice total de salud de gases disueltos
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default GasesDisueltos;
