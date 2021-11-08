
import './style.css';
import { Offcanvas } from "../../../node_modules/react-bootstrap/cjs";
import { Dropdown} from "../../../node_modules/react-bootstrap";
import { Link } from "react-router-dom";
import * as constants from '../../Constant';

function Sidebar(props) {
    return (
        <>
        <div className="sega_closedSidebar">
            <div className="sega_menubar-closed">
                <div className="sega_menubar-header" onClick={props.toggleShow}>
                </div>
                <div className="sega_menubar-container">
                    <ul
                        className='sega_sidebar-list'
                    >
                        <li className='sega_sidebar-item'>
                            <div className="sega_sidebar-container">
                                <div className="sega_sidebar-box"></div>
                                <a href='#!' className="sega_sidebar">
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
                                <a href='#!' className="sega_sidebar">
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
                                <a href='#!' className="sega_sidebar">
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
                                <div className="sega_menubar-header" onClick={props.handleClose}>
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
                                <a href='#!' className="sega_sidebar">
                                    <i className="material-icons-outlined sega_left">track_changes</i>
                                    <p>Dashboard</p>
                                </a>
                            </div>
                        </li>
                        <li
                            className='sega_sidebar-item'
                        >
                            <Dropdown>
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
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">business</i>
                                            <p>Subestaciones</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
                                            <div className="sega_sidebar-box"></div>
                                            
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">settings_input_component</i>
                                                <p>Transformadores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">call_split</i>
                                                <p>Interruptores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
                                            <div className="sega_sidebar-box"></div>
                                            <a href='#!' className="sega_sidebar">
                                                <i className="material-icons-outlined sega_left">flash_on</i>
                                                <p>Descargadores</p>
                                            </a>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Toggle variant="success" className='sega_dropdown-toggle ' id="sega_dropdown-basic">
                                    <div className="sega_sidebar-container">
                                        <div className="sega_sidebar-box"></div>
                                        <a href='#!' className="sega_sidebar">
                                            <i className="material-icons-outlined sega_left">format_strikethrough</i>
                                            <p>Líneas de alta tensión</p>
                                            <i className="material-icons sega_icon-right">keyboard_arrow_down</i>
                                        </a>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <Dropdown.Menu>
                                    <Dropdown.Item href={''}>
                                        <div className="sega_sidebar-container">
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
                                <a href='#!' className="sega_sidebar">
                                    <i className="material-icons-outlined sega_left">track_changes</i>
                                    <p>Cerrar sesión</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
            </>
    );
}




export default Sidebar
