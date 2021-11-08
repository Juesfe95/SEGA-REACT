import React from 'react'
import './mesnuStyle.css';
import { Link} from "react-router-dom";
import * as Constants from "../../Constant";


function SubmenuNavegacionTransformador() {
  return (
    <div>
      <ul className="navega">
        <li>
          <Link to={Constants.DETALLETRANSFORMADOR} ><b> Resumen</b></Link>
        </li>
        <li>
          <Link to={Constants.HISTORICOTRANSFORMADOR} ><b> Historico</b></Link>
        </li>
        <li>
          <Link to={Constants.GASESDISUELTOS} > <b>Gases disueltos</b></Link>
        </li>
        <li>
          <Link to={Constants.FISICOQUIMICAS} > <b>Físico quimicas</b></Link>
        </li>
        <li>
          <Link to={Constants.FURANOS} ><b> Furanos</b></Link>
        </li>
        <li>
          <b>Eléctricas</b>
        </li>
        <li>
          <Link to={Constants.MOVIMIENTOS} > <b>Movimientos</b></Link>

        </li>
        <li>
          <Link to={Constants.OBSERVACIONES} > <b>Observaciones</b></Link>
    
        </li>
      </ul>
      
    </div>
  );
}

export default SubmenuNavegacionTransformador