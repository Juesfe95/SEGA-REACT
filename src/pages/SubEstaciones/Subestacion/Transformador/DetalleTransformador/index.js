import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAndSidebar from "../../../../../components/navbarAndSidebar/navbarAndSidebar";
import { Col, Container, Row } from "react-bootstrap";
import SubmenuNavegacionTransformador from "../../../../../components/SubmenuNavegacionTransformador/SubmenuNavegacionTransformador";
import "./style.css";
import Resumen from "../../../../../components/SubmenuNavegacionTransformador/Resumen";
import * as constants from '../../../../../Constant';

const DetalleTransformador = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const toggleShow = () => setShow((s) => !s);
  const [data, setData] = useState([]);

  const [transformadorSeleccionado, setTransformadorSeleccionado] = useState([]);
  let transformadorSeleccionadoSessionStorage;
  const getData = async () => {
    try {
      transformadorSeleccionadoSessionStorage = JSON.parse(sessionStorage.getItem('TRANSFORMADOR_SELECCIONADO'));
      const data = await axios.get(
        "http://10.240.238.94:8080/epsa-api/api/transformador/ver-informacion", {
        headers: {
          "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN')
        },
        params: {
          "idTransformador": transformadorSeleccionadoSessionStorage.id
        }
      }
      );
      console.log(data.data.objeto_respuesta);
      setData(data.data.objeto_respuesta);
      setTransformadorSeleccionado(transformadorSeleccionadoSessionStorage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavbarAndSidebar
        show={show}
        handleClose={handleClose}
        toggleShow={toggleShow}
      />

      <Container>
        <Row>
          <Row>
              <Col>
                  <div className="sega_breadcrumb">
                      <a style={{marginTop:'10rem'}} href={constants.DASHBOARD} className="sega_breadcrumb-item">Home</a>
                      <a href={constants.TRANSFORMADORES} className="sega_breadcrumb-item">Transformadores </a>
                      <a href="#!" className="sega_breadcrumb-item">Transformador</a>
                  </div>
              </Col>
            </Row>

          <Col xs={7}>
            <div className="sega_h1 sega_primaryTypoColor-text">
              Transformador {transformadorSeleccionado.nombre} 
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon">
                <i className="material-icons-outlined">help_outline</i>
              </div>
            </div>
          </Col>
          <SubmenuNavegacionTransformador />
          <Resumen/>
        </Row>
        
      </Container>
    </div>
  );
};

export default DetalleTransformador;
