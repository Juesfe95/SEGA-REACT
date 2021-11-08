import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="sega_navbar sega_primaryColor sega_elevation-depth4">
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
                <a href='#!' className="sega_userBar-content">
                    <p>Nombre del ingeniero en particular</p>
                    <div><i className="material-icons-outlined">person</i><i className="material-icons sega_small">arrow_drop_down</i></div>
                    <div><i className="material-icons-outlined">notifications<div className="sega_dot"></div></i></div>
                </a>
            </div>
        </div>
    )
}

export default Navbar
