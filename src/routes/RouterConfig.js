import React from "react";
import * as Constants from "../Constant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard";
import Geolocalizacion from "../pages/Geolocalizacion";
import LineasAltaTension from "../pages/LineasAltaTension";
import Pruebas from "../pages/Pruebas";
import RedesMTBT from "../pages/RedesMTBT";
import RegistroActivos from "../pages/RegistroActivos";
import RegistroCambiador from "../pages/RegistroActivos/RegistroCambiador";
import SistemaFotovaltios from "../pages/SistemaFotovaltios";
import SubEstaciones from "../pages/SubEstaciones/SubEstaciones";
import Subestacion from "../pages/SubEstaciones/Subestacion";
import Transformadores from '../pages/SubEstaciones/Transformadores';
import PrivateRoute from "./PrivateRoute";
import DetalleTransformador from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/index";
import HistoricoTransformador from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/Historico";
import GasesDisueltos from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/GasesDisueltos";
import FisicoQuimicas from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/FisicoQuimicas";
import Furanos from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/Furanos";
import Movimientos from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/Movimientos";
import Observaciones from "../pages/SubEstaciones/Subestacion/Transformador/DetalleTransformador/Observaciones";

function Routerconfig() {
    return (
        <Router>
            <Switch>
                <Route exact path={Constants.HOME} component={Login} />
                <PrivateRoute path={Constants.DASHBOARD}>
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path={Constants.GEOLOCALIZACION}>
                    <Geolocalizacion />
                </PrivateRoute>
                <PrivateRoute path={Constants.LINEASALTATENSION}>
                    <LineasAltaTension />
                </PrivateRoute>
                <PrivateRoute path={Constants.PRUEBAS}>
                    <Pruebas />
                </PrivateRoute>
                <PrivateRoute path={Constants.REDESMTBT}>
                    <RedesMTBT />
                </PrivateRoute>
                <PrivateRoute path={Constants.REGISTROACTIVOS}>
                    <RegistroActivos />
                </PrivateRoute>
                <PrivateRoute path={Constants.REGISTROCAMBIADOR}>
                    <RegistroCambiador />
                </PrivateRoute>
                <PrivateRoute path={Constants.SISTEMAFOTOVALTIOS}>
                    <SistemaFotovaltios />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.SUBESTACIONES}>
                    <SubEstaciones />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.SUBESTACION}>
                    <Subestacion />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.DETALLETRANSFORMADOR}>
                    <DetalleTransformador />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.HISTORICOTRANSFORMADOR}>
                    <HistoricoTransformador />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.GASESDISUELTOS}>
                    <GasesDisueltos />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.FISICOQUIMICAS}>
                    <FisicoQuimicas />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.FURANOS}>
                    <Furanos />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.MOVIMIENTOS}>
                    <Movimientos />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.OBSERVACIONES}>
                    <Observaciones />
                </PrivateRoute>
                <PrivateRoute exact path={Constants.TRANSFORMADORES}>
                    <Transformadores />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default Routerconfig;
