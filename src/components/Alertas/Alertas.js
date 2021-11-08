import React from 'react'
import './Alertas.css'

function Alertas(props) {
    if(props.correcto){
        return(
            <div class="sega_alerts sega_alerts_extend sega_successAltColor sega_successColor-text">
                <i class="material-icons-outlined icon-right">check_circle</i> {props.texto}
            </div>
        )
    }else if(props.alerta){
        return(
            <div class="sega_alerts sega_alerts_extend sega_warningAltColor sega_warningColor-text">
                <i class="material-icons-outlined icon-right">error_outline</i> {props.texto}
            </div>
        )
    }else if(props.error){
        return(
            <div class="sega_alerts sega_alerts_extend sega_errorAltColor sega_errorColor-text">
                <i class="material-icons-outlined icon-right">highlight_off</i> {props.texto}
            </div>
        )
    }else if(props.tag){
        return(
            <div class="sega_alerts sega_alerts_extend sega_lighterAltColor sega_primaryColor-text">
                <i class="material-icons-outlined icon-right">label</i> {props.texto}
            </div>
        )
    }else{
        return(
            <div style={{display:'none'}} class="sega_alerts sega_lighterAltColor sega_primaryColor-text">
                <i class="material-icons-outlined icon-right">label</i> {props.texto}
            </div>
        )
    }
    
}

export default Alertas