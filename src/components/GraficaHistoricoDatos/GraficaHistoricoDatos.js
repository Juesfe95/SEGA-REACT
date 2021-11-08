import React from 'react'
import './style.css';
import graphImg from './image.png';

function GraficaHistoricoDatos() {
    return (
        <div className="sega_graficaHistoricoDatosContainer sega_primaryColor-text sega_elevation-depth3" >
            <div className="sega_card-panel sega_h1 sega_text-regular">
                asdasd
                {/* {this.props.title} */}
            </div>
            <div className="sega_divider2"></div>
            <div className="sega_graficaHistoricoDatosInternalContainer">
                <div className="sega_graficaHistoricoDatosInternalMenu">
                    <a href="#!" className="sega_button-secondary sega_button-icon-right">
                        <i className="material-icons sega_icon-right">chevron_right</i>
                        asdasd
                        {/* {this.props.button1} */}
                    </a>
                    <a href="#!" className="sega_button-secondary sega_button-icon-right">
                        <i className="material-icons sega_icon-right">chevron_right</i>
                        asdasd
                        {/* {this.props.button2} */}
                    </a>
                    <a href="#!" className="sega_button-secondary sega_button-icon-right">
                        <i className="material-icons sega_icon-right">chevron_right</i>
                        asdasd
                        {/* {this.props.button3} */}
                    </a>
                </div>
                <div className="sega_graficaHistoricoDatosGrafico"><img src={graphImg} />
                </div>
            </div>
        </div>
    );
}

export default GraficaHistoricoDatos