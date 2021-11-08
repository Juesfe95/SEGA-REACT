import React, { useState } from "react";
import NavbarAndSidebar from "../../../../../../components/navbarAndSidebar/navbarAndSidebar";
import { Col, Container, Row } from "react-bootstrap";
import SubmenuNavegacionTransformador from "../../../../../../components/SubmenuNavegacionTransformador/SubmenuNavegacionTransformador";
import "../style.css";
import GasesDisueltos from "../../../../../../components/SubmenuNavegacionTransformador/GasesDisueltos";


const GasesDisueltosformador = () => {
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

      <Container>
        <Row>
          <nav>
            <div className="sega_breadcrumb">
              <div className="col s9">
                <a href="#!" className="sega_breadcrumb-item">
                  Página anterior
                </a>
                <a href="#!" className="sega_breadcrumb-item">
                  Página actual
                </a>
              </div>
            </div>
          </nav>

          <Col xs={7}>
            <div className="sega_h1 sega_primaryTypoColor-text">
              Transformador TP1 - AT1-A/A-MON-T - SE Río Jamundí
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon">
                <i className="material-icons-outlined">help_outline</i>
              </div>
            </div>
          </Col>
          <SubmenuNavegacionTransformador />
          <GasesDisueltos/>
        </Row>
        
      </Container>
    </div>
  );
};

export default GasesDisueltosformador;