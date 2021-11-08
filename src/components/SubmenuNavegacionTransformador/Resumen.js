import React from "react";
import "./mesnuStyle.css";
import { Col, Row } from "react-bootstrap";

function Resumen() {
  return (
    <div>
      <Row className="mt-5">
        <Col xs={4}>
          <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
            <div className="sega_h1 sega_primaryTypoColor-text">
              Información técnica
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon"></div>
            </div>
          </div>
        </Col>
        <Col xs={8}>
          <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
            <div className="sega_h1 sega_primaryTypoColor-text">
              Desempeño
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-4">
          <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
            <div className="sega_h1 sega_primaryTypoColor-text">
              Nivel taxonómico TP1
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Resumen;
