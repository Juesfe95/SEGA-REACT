import React from "react";
import "./mesnuStyle.css";
import { Col, Row } from "react-bootstrap";

function Movimientos() {
    return (
        <div>
            <Row>
                <Col xs={12} className="mt-4">
                    <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_elevation-depth16">
                        <div className="sega_h1 sega_primaryTypoColor-text">
                            Movimientos
                            <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon"></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Movimientos;