import React, { useEffect, useState } from 'react'
import './style.css';
import logo from '../../img/sega-logo.png';
import axios from 'axios';
import * as constants from '../../Constant';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alerta from '../../components/Alertas/Alertas'
function Login(){
    const [alertStates, setAlertStates] = useState({
          correcto: false,
          alerta: false, 
          error: false, 
          tag: false, 
          texto: '' 
    });
    const mostrarAlerta=(correcto,alerta,error,tag,texto)=>{
        setAlertStates({
            ...alertStates,
            correcto,
            alerta,
            error,
            tag,
            texto
        });
    }

    const [state, setState] = useState({
        username: '',
        password: '',
    });
        const handleChange = async e => {
            await setState({
                    ...state,
                    [e.target.name]: e.target.value
            });
        }

        const payload = new FormData();
        payload.append('grant_type', 'password');
        payload.append('username', state.username);
        payload.append('password', state.password);
        payload.append('client_id', 'spring-security-oauth2-read-write-client');   
        

        const iniciarSesion=async()=>{
            await axios.post(constants.BASEURL+constants.LOGINENPONT, payload,
            {
                headers: constants.HEADERS
            })
            .then(response=>{
                sessionStorage.setItem('USER_TOKEN',response.data.access_token);
                sessionStorage.setItem('USER', state.username);
                sessionStorage.setItem('EXPIRED_TOKEN',response.data.expires_in)
                   if(response.data.access_token){
                    //directorioActivo(state.username,state.password)
                        window.location.href=constants.DASHBOARD;
                   }
            })
            .catch(error=>{
                sessionStorage.clear();
                switch (error.status) {
                    case 400:
                        mostrarAlerta(false,false,true,false,"Usuario y/o contraseña invalidos");
                      break;
                    case 401:
                        mostrarAlerta(false,false,true,false,"No Autorizado");
                      break;
                    case 403:
                        mostrarAlerta(false,false,true,false,"No se cuenta con los permisos para acceder al servidor");
                      break;
                    default:
                        mostrarAlerta(false,false,true,false,"Error al iniciar sesión por favor, contacte el administrador del sistema");
                      break;
                  }
            })
        }


        const directorioActivo=async(username,pass)=>{
            axios({
                method: "get",
                url: "http://10.240.238.94:8080/epsa-api/api/sigle-sign-on/directorio-activo" ,
                data: {
                    user:username,
                    password:pass
                },
                headers:{
                    "Authorization": "bearer " + sessionStorage.getItem('USER_TOKEN')
                  }
            })
            .then((response) => {
                if(response.data.value == "Ok"){
                    mostrarAlerta(true,false,false,false,'Directorio activo verificado');
                    setTimeout(() => {
                        window.location.href=constants.DASHBOARD;
                    },3000)
                }else{
                    sessionStorage.clear();
                    mostrarAlerta(false,false,true,false,response.data.value);
                }
            })
            .catch((error) => {
                mostrarAlerta(false,false,true,false,'error verificando el directorio activo, por favor comuniquese con el administrador del sistema');
                sessionStorage.clear();
            });
        }

    
        return (
            <div className='main-home' id="home-sega">
                <Alerta
                    {...alertStates}
                />
                <div className='container-custom'>
                    <div className="row row-custom">
                        <img width="300px" src={logo} alt="logo" />
                    </div>
                    <div className="row bottom-separator"></div>
                    <div className='row title-main margin-fixer-bottom'>
                        <div className='col-12'>
                            <h1 className="mt-3">
                                <span>Inicia sesión</span>
                            </h1>
                            <p className="mt-3">Inicia sesión para empezar a gestionar los activos de nuestra compañía.</p>
                            <div className="row">
                                <form id="login" className="col-12">
                                    <div className="row mt-3">
                                        <div className="input-login">
                                            <label  className="form-label">Usuario</label>
                                            <input
                                                type="email"
                                                id="username"
                                                className="form-control  mt-1"
                                                aria-describedby="passwordHelpBlock"
                                                name="username"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="input-login  mt-3">
                                            <label  className="form-label">Contraseña</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                aria-describedby="passwordHelpBlock"
                                                name="password"
                                                onChange={handleChange} 
                                            />
                                        </div>
                                        <p className='check-wrapper mt-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span>No cerrar sesión</span>
                                            </label>
                                        </p>
                                        <button type="button" className="btn-login mt-1" onClick={()=> iniciarSesion()}>
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </form>
                                <div className='col-12' id='password-recovery-link-wrapper'>
                                    <a href="#!">¿Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Login