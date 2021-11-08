import React from 'react';
import './navbar.css';
import './style.css';
import { Offcanvas } from "../../../node_modules/react-bootstrap/cjs";
import { Dropdown, ButtonGroup } from "../../../node_modules/react-bootstrap";
import * as constants from '../../Constant';
import AutomaticLogOut from "../../routes/AutomaticLogOut";

function NavbarAndSidebar(props) {

  const exit = (e) =>{
    window.location=constants.HOME;
    sessionStorage.clear();
  }

    return (
        <>
            <div className="sega_navbar2 sega_navbar sega_primaryColor sega_elevation-depth4">
                <div className="sega_navbar-logos">
                    <div className="sega_logo sega_logo-h-small-white">
                        <a href='#!'>Un botón</a>
                    </div>
                    <div className="sega_navbar-divider"></div>
                    <div className="sega_logo sega_logo-sega">
                        <a href='#!'>Un botón</a>
                    </div>
                </div>
                <div className="sega_userBar">
                    <Dropdown as={ButtonGroup} className="sega_userBar-content sega_dropdown-menu-trigger">
                        <label> <b>!Bienvenido: </b>{sessionStorage.getItem('USER')}</label>
                        <Dropdown.Toggle id="dropdown-custom-1" className="sega_userBar-content sega_dropdown-menu-trigger">
                            <div><i className="material-icons-outlined">person</i><i className="material-icons sega_small">arrow_drop_down</i></div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="sega_navbar-dropdown-menu">
                            <Dropdown.Item className="sega_dropdown-menu-item" eventKey="1"><i class="material-icons">key</i>Cambiar contraseña</Dropdown.Item>
                            <Dropdown.Item className="sega_dropdown-menu-item" eventKey="2"><i class="material-icons">edit</i>Editar perfil</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="sega_dropdown-menu-item" eventKey="4"><i class="material-icons">power_settings_new</i>Cerrar sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="sega_closedSidebar  sega_closedSidebar2">
                <div className="sega_menubar-closed">
                    <div className="sega_menubar-header" onClick={props.toggleShow}>
                        <i style={{ color: '#fff', marginTop: '.8rem' }} className="material-icons-outlined sega_left">menu</i>
                    </div>

                    <div className="sega_menubar-container">
                        <ul
                            className='sega_sidebar-list'
                        >
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href={constants.DASHBOARD} className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">track_changes</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">location_on</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">add_circle_outline</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">network_check</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href={constants.SUBESTACIONES} className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">business</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">format_strikethrough</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">device_hub</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">flare</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">person</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">assignment</i>
                                    </a>
                                </div>
                            </li>
                            <li className='sega_sidebar-item'>
                                <div className="sega_sidebar-container">
                                    <div className="sega_sidebar-box"></div>
                                    <a href='#!' onClick={exit} className="sega_sidebar">
                                        <i className="material-icons-outlined sega_left">power_settings_new</i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div><Offcanvas show={props.show} onHide={props.handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div>
                            <div className="sega_menubar">
                                <div style={{ display: 'inline-flex' }} className="sega_menubar-header" onClick={props.handleClose}>
                                    <i style={{ color: '#fff', marginTop: '.8rem' }} className="material-icons-outlined sega_left">arrow_back_ios</i>
                                    <div className="sega_logo sega_logo-h-medium-white">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul
                        className='sega_sidebar-list'
                    >
                        <li className='sega_sidebar-item'>
                            <div className="sega_sidebar-container">
                                <div className="sega_sidebar-box"></div>
                                <a href={constants.DASHBOARD} className="sega_sidebar">
                                    <i className="material-icons-outlined sega_left">track_changes</i>
                                    <p>Dashboard</p>
                                </a>
                            </div>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">location_on</i>
                                            <p>Geolocalización</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">track_changes</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='sega_sidebar-item'>
                            <div className="sega_sidebar-container">
                                <div className="sega_sidebar-box"></div>
                                <a href='#!' className="sega_sidebar">
                                    <i className="material-icons-outlined sega_left">add_circle_outline</i>
                                    <p>Registro de activos</p>
                                </a>
                            </div>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">network_check</i>
                                            <p>Pruebas</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">track_changes</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">business</i>
                                            <a href={constants.SUBESTACIONES} className="sega_sidebar-dropdown-link">
                                                Subestaciones
                                            </a>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={constants.TRANSFORMADORES}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href={constants.TRANSFORMADORES} className="sega_sidebar sega_sidebar-dropdown-item">
                                                <i className="material-icons-outlined sega_left">settings_input_component</i>
                                                <p>Transformadores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">call_split</i>
                                                <p>Interruptores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">flash_on</i>
                                                <p>Descargadores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">assignment_late</i>
                                                <p>Eventos</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle' id="sega_dropdown-basic">
                                    <div className="sega_dropdown-toggle-block"></div>
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">format_strikethrough</i>
                                            <p>Líneas de alta tensión</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">track_changes</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">device_hub</i>
                                            <p>Redes MTBT</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">track_changes</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">flare</i>
                                            <p>Sistemas fotovoltáicos</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">track_changes</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='sega_sidebar-item'>
                            <div className="sega_sidebar-container">
                                <div className="sega_sidebar-box"></div>
                                <a href='#!' className="sega_sidebar">
                                    <i className="material-icons-outlined sega_left">person</i>
                                    <p>Usuarios</p>
                                </a>
                            </div>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
                                <div className="sega_dropdown-toggle-block"></div>
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">assignment</i>
                                            <p>Reportes</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='sega_dropdown-menu-sidebar'>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container sega_sidebar-dropdown-item">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">power_settings_new</i>
                                                <p>Dashboard</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='sega_sidebar-item'>
                            <div className="sega_sidebar-container">
                                <div className="sega_sidebar-box"></div>
                                <a href='#!' className="sega_sidebar" onClick={exit}>
                                    <i className="material-icons-outlined sega_left">track_changes</i>
                                    <p>Cerrar sesión</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
            <AutomaticLogOut/>
        </>
    )
}

export default NavbarAndSidebar