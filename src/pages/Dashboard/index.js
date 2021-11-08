import React, { useState } from "react";
import NavbarAndSidebar from "../../components/navbarAndSidebar/navbarAndSidebar";
import MatrizDeCriticidadtrafos from "../../components/GraficoDeCriticidadTrafos/GraficoDeCriticidadTrafos"
import GraficoDeTortaIndiceSaludTrafos from "../../components/GraficaDeTortaIndiceSaludTrafos/GraficoDeTortaIndiceSaludTrafos"
import GraficoTortaCriticidadTrafos from "../../components/GraficaTortaCriticidadTrafos/GraficaTortaCriticidadTrafos"
import GraficaIndiceSaludDps from "../../components/GraficaIndiceSaludDps/GraficaIndiceSaludDps"
import "./dashboard.css";
import { Col, Row } from "react-bootstrap";
import AutomaticLogOut from "../../routes/AutomaticLogOut";
import ExportTableButton from '../../components/Tablas/ExportTableButton';
import axios from 'axios';
import Spinner from "../../components/Spinner/Spinner"
import * as constants from '../../Constant';


function Dashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const toggleShow = () => setShow((s) => !s);
  const [data, setData] = useState([]);

  const [ubicacion, setZona] = useState('valle');

  const onchangeHandler = (e) => {
    setZona(e.target.value);
    removeGraphLink();
    if (e.target.value == "valle") {
      getData(1);
    }
    else if (e.target.value == "caribe") {
      getData(2);
    }
    else if (e.target.value == "tolima") {
      getData(3);
    }
    else if (e.target.value == "global") {
      getData(4);
    }

  }

  /*const onchangeEquipo = (e) =>{

    if(e.target.value == 'default'){
      document.getElementById('divGraficaPieTrafos').style.display='block';
      document.getElementById('divGraficaPieTrafosCriticidad').style.display='block';
      document.getElementById('divGraficaPieDps').style.display='none';
    }else{
      document.getElementById('divGraficaPieDps').style.display='block';
      document.getElementById('divGraficaPieTrafos').style.display='none';
      document.getElementById('divGraficaPieTrafosCriticidad').style.display='none';
    }
  }*/

  const getData = async (zona) => {
    try {
      const data = await axios.get(
        "http://10.240.238.94:8080/epsa-api/api/transformador/dashboard-reporte-trafos-global", {
        headers: { "Authorization": 'Bearer' + sessionStorage.getItem('USER_TOKEN') },
        params: { "accion": zona }
      }
      );
      setData(data.data.objeto_respuesta);
    } catch (e) {
      console.log(e);
    }
  };

  const removeGraphLink = () => {
    setTimeout(() => {
      const elementList = document.querySelectorAll('g [shape-rendering="auto"]');
      elementList.forEach(element => {
        element.parentNode.parentNode.style.display = 'none';
      });
    }, 2000);
  }
  return (
    <>
      <NavbarAndSidebar
        show={show}
        handleClose={handleClose}
        toggleShow={toggleShow}
      />
      <div className="dashboardPrincipal">
        <br />
        <br />
        <br />
        <br />
        <Row>
          <nav>
            <div className="sega_breadcrumb" >
              <div className="col s9">
                <a href="#!" className="sega_breadcrumb-item" style={{ marginTop: '3rem' }}>
                  Panel de control
                </a>
              </div>
            </div>
          </nav>
          <Col xs={4}>
            <div className="sega_h1 sega_primaryTypoColor-text" style={{ marginBottom: '1rem', marginLeft: '1rem' }}>
              Panel de control
              <div className="sega_chip-icon sega_mediumGrayColor-text sega_marginLeft-icon">
                <i className="material-icons-outlined">help_outline</i>
              </div>
            </div>
          </Col>
          <Col> </Col>
          <Col xs={1} >
            < ExportTableButton
              csvData={data}
              fileName="table"
              buttonClass="sega_button-main botonDescargaDashboard"
              position="right"
              icon="download"
              iconClass="material-icons sega_icon-right"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={2}>
            <nav>
              <div className="sega_select" style={{ marginBottom: '2rem' }} >
                <select defaultValue={'default'}>
                  <option value='default' >Transformadores</option>
                  <option value='2'>Subestaciones</option>
                  <option value='3'>Lineas de alta tensión</option>
                  <option value='4'>Redes MTBT</option>
                  <option value='5'>Sistemas fotovoltáicos</option>
                </select>
              </div>
            </nav>
          </Col>
          <Col xs={5} className="sega_switch_col">
            <div className="sega-box-switch">
              <b>Valle</b>
              <label className="sega_switch">
                <input type="radio" name="zona" value="valle" id="radioValle" defaultChecked onChange={onchangeHandler} />
                <div className="sega_switch-slider"></div>
              </label>
            </div>
            <div className="sega-box-switch">
              <b>Tolima</b>
              <label className="sega_switch">
                <input type="radio" name="zona" value="tolima" id="radioTolima" onChange={onchangeHandler} />
                <div className="sega_switch-slider"></div>
              </label>
            </div>
            <div className="sega-box-switch">
              <b>Caribe</b>
              <label className="sega_switch">
                <input type="radio" name="zona" value="caribe" id="radioCaribe" onChange={onchangeHandler} />
                <div className="sega_switch-slider"></div>
              </label>
            </div>
            <div className="sega-box-switch">
              <b>Total</b>
              <label className="sega_switch">
                <input type="radio" name="zona" value="global" id="radioGlobal" onChange={onchangeHandler} />
                <div className="sega_switch-slider"></div>
              </label>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <div className="sega_card-panel sega_text sega_primaryColor-text sega_whiteColor sega_dashboard-depth">
          <Row>
            <Col sm={12}>
              <div >
                <div style={{ margin: '1rem' }} className="sega_h1 sega_primaryTypoColor-text">
                  Matriz de criticidad
                </div>
                <div className="sega_divider2"></div>
                <MatrizDeCriticidadtrafos onClick={removeGraphLink()}
                  zona={ubicacion}
                />
                <div >
                  <ul className='criticality-list'>
                    <li className='criticality-indicator' style={{ fontSize: '12px' }}><i style={{ fontSize: '16px' }} className="material-icons margin-fixer-right very-high-color">lens</i>Muy alta criticidad</li>
                    <li className='criticality-indicator' style={{ fontSize: '12px', marginLeft: '20px' }}><i style={{ fontSize: '16px' }} className="material-icons margin-fixer-right high-color">lens</i>Alta criticidad </li>
                    <li className='criticality-indicator' style={{ fontSize: '12px', marginLeft: '20px' }}><i style={{ fontSize: '16px' }} className="material-icons margin-fixer-right medium-color">lens</i>Media criticidad</li>
                    <li className='criticality-indicator' style={{ fontSize: '12px', marginLeft: '20px' }}><i style={{ fontSize: '16px' }} className="material-icons margin-fixer-right low-color">lens</i>Baja criticidad</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={3}>
            <div id="divGraficaPieTrafosCriticidad" className="sega_dashboard-depth" style={{ marginTop: '3rem' }}>
              <div className="pieGraficaTorta">
                <Row>
                  <Col md={6} className="tituloGraficaTorta">
                    <h6>Transformadores - criticidad</h6>
                  </Col>
                  <Col md={{ span: 2, offset: 2 }} >
                    <a href={constants.TRANSFORMADORES} style={{ textAlign: 'right', boxShadow: 'none' }} className="sega_button-secondary sega_button-icon-right">Ver
                      <i className="material-icons-outlined sega_left">navigate_next</i>
                    </a>
                  </Col>
                </Row>
              </div>
              <GraficoTortaCriticidadTrafos
                zona={ubicacion}
              />
            </div>
          </Col>
          <Col xs={3}>
            <div id="divGraficaPieTrafos" className="sega_dashboard-depth" style={{ marginTop: '3rem' }}>
              <div className="pieGraficaTorta">
                <Row>
                  <Col md={6} className="tituloGraficaTorta">
                    <h6>Transformadores</h6>
                  </Col>
                  <Col md={{ span: 2, offset: 2 }} >
                    <a href={constants.TRANSFORMADORES} style={{ textAlign: 'right', boxShadow: 'none' }} className="sega_button-secondary sega_button-icon-right">Ver
                      <i className="material-icons-outlined sega_left">navigate_next</i>
                    </a>
                  </Col>
                </Row>
              </div>
              <GraficoDeTortaIndiceSaludTrafos
                zona={ubicacion}
              />
            </div>
          </Col>
          <Col xs={3}>
            <div id="divGraficaPieDps" className="sega_dashboard-elevation" style={{ marginTop: '3rem' }}>
              <div className="pieGraficaTorta">
                <Row>
                  <Col md={6} className="tituloGraficaTorta">
                    <h6>Descargadores</h6>
                  </Col>
                  <Col md={{ span: 2, offset: 2 }} >
                    <a href={constants.TRANSFORMADORES + "?id=" + 1} style={{ textAlign: 'right', boxShadow: 'none' }} className="sega_button-secondary sega_button-icon-right">Ver
                      <i className="material-icons-outlined sega_left">navigate_next</i>
                    </a>
                  </Col>
                </Row>
              </div>
              <GraficaIndiceSaludDps
                zona={ubicacion}
              />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
