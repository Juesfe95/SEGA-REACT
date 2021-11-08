import React from 'react'
import './style.css';
import graphImg from './graph.png';

function GraficoCondicionAceite() {
    return (
        <div className="sega_graficoCondicionAceiteContainer sega_primaryColor-text sega_elevation-depth3">
            <div className="sega_card-panel sega_h1 sega_text-regular">
                <p>{this.props.title}</p>
            </div>
            <div className="sega_divider2"></div>
            <div className="sega_graficoCondicionAceiteInternalContainer">
                <div className="sega_graficoCondicionAceiteGrafico"><img src={graphImg} /></div>
                <div className="sega_graficoCondicionAceiteGrafico"><img src={graphImg} /></div>
                <div className="sega_graficoCondicionAceiteGrafico"><img src={graphImg} /></div>
                <div className="sega_graficoCondicionAceiteGrafico"><img src={graphImg} /></div>
            </div>
        </div>
    );

}

export default GraficoCondicionAceite;
