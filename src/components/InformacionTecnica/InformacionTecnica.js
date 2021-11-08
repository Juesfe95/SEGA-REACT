import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function InformacionTecnica() {
    return (
        <div className="sega_informacionTecnicaContainer sega_primaryColor-text sega_elevation-depth3">
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className="sega_card-panel sega_h1 sega_text-regular">
                            Información técnica de la prueba físico químicas
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sega_informacionTecnicaDate sega_h4 sega_text-regular">
                            Última prueba: 25/07/2021
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="sega_divider2"></div>
            <div className="sega_informacionTecnicaInternalContainer">
                <p>
                    Serial: 2394283 <br />
                    Marca: ASEA <br />
                    Año de fabricación: 2021 <br />
                    Subestación: GUAYABAL <br />
                    Tensión nominal primaria (kV): 115 <br />
                    Tensión nominal secundaria (kV): 80 <br />
                    Tensión nominal terciaria (kV): --- <br />
                    Potencia nominal (MVA): 4 <br />
                    Grupo de Conexión: Dy1 <br />
                    Tipo de prueba: Plan <br />
                </p>
                <p>
                    Acidez: 0.2 <br />
                    Azufre Corrosivo: Bueno <br />
                    Factor Potencia 100°C: --- <br />
                    Estado operativo: En Servicio <br />
                    Tipo transformador (kV): Trifasico de dos devanados <br />
                    Factor Potencia 25°C: --- <br />
                    Temperatura Aceite°C: --- <br />
                    Temperatura Devanado At°C: --- <br />
                    Temperatura Devanado Bt°C: --- <br />
                    Temperatura Devanado Mt°C: --- <br />
                </p>
                <p>
                    Temperatura Muestra°C: --- <br />
                    Gravedad Especifica: --- <br />
                    Inhibidor Bht(%): --- <br />
                    Valor Pcbs: SI <br />
                    Tension Interfacial: --- <br />
                    Color: --- <br />
                    Temperatura Ambiente: --- <br />
                    Laboratorio: Maquinando <br />
                </p>
            </div>

        </div>
    );
}

export default InformacionTecnica