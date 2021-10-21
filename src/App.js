import React, {Component, useEffect} from "react";
import {
    HashRouter as Router, Switch, Route, Link
} from "react-router-dom";
import {useTranslation} from "react-i18next"

import "./index.css"
import Logo from "./imagenes/logo.png"
import Contacto from "./components/Contacto";
import Portafolio from "./components/Portafolio";
import Servicios from "./components/Servicios";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";

function App() {

    const [t, i18n] = useTranslation('global');

    useEffect(() => {
        if (localStorage.getItem('emerlang')){
            i18n.changeLanguage(`${localStorage.getItem('emerlang')}`);
        }else {
            localStorage.setItem("emerlang", "es");
        }
    },[])

    const abrirMenu = () => {
        const menu = document.querySelector('.hide-menu');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show')
        }
    }


    return (
        <Router>
            <div className="NavBar">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo-emerson"/>
                    </Link>
                </div>
                <div className="menu-bars" onClick={abrirMenu}>
                    <i className="fas fa-bars fa-lg"></i>
                </div>
                <div className="nav-lista">
                    <ul>
                        <li>
                            <Link to="/inicio" className="">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/servicios">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/portafolio">Portafolio</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hide-menu">
                <div className="hide-nav">
                    <ul>
                        <li><Link to="/inicio" onClick={abrirMenu}>Inicio</Link></li>
                        <li><Link to="/servicios" onClick={abrirMenu}>Servicios</Link></li>
                        <li><Link to="/portafolio" onClick={abrirMenu}>Portafolio</Link></li>
                        <li><Link to="/contacto" onClick={abrirMenu}>Contacto</Link></li>
                        <li><i className="far fa-times-circle fa-lg" onClick={abrirMenu}></i></li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route path="/contacto">
                    <Contacto/>
                    <Footer/>
                </Route>
                <Route path="/:id">
                    <Inicio/>
                    <Servicios/>
                    <Portafolio/>
                    <Footer/>
                </Route>
                <Route path="/">
                    <Inicio/>
                    <Servicios/>
                    <Portafolio/>
                    <Footer/>
                </Route>
            </Switch>
        </Router>
    );

}

export default App;
