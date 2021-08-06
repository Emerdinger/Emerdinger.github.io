import React, {Component} from "react";
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import "./index.css"
import Logo from "./imagenes/logo.png"
import Contacto from "./components/Contacto";
import Portafolio from "./components/Portafolio";
import Servicios from "./components/Servicios";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";

class App extends Component {

    abrirMenu = () => {
        const menu = document.querySelector('.hide-menu');

        if (menu.classList.contains('show')){
            menu.classList.remove('show');
        }else{
            menu.classList.add('show')
        }
    }



    render() {
        return (
            <Router>
                <div className="NavBar">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo-emerson"/>
                        </Link>
                    </div>
                    <div className="menu-bars" onClick={this.abrirMenu}>
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
                            <li><Link to="/inicio" onClick={this.abrirMenu}>Inicio</Link></li>
                            <li><Link to="/servicios" onClick={this.abrirMenu}>Servicios</Link></li>
                            <li><Link to="/portafolio" onClick={this.abrirMenu}>Portafolio</Link></li>
                            <li><Link to="/contacto" onClick={this.abrirMenu}>Contacto</Link></li>
                            <li><i className="far fa-times-circle fa-lg" onClick={this.abrirMenu}></i></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route path="/contacto">
                        <Contacto/>
                        <Footer />
                    </Route>
                    <Route path="/:id">
                        <Inicio />
                        <Servicios />
                        <Portafolio />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Inicio />
                        <Servicios />
                        <Portafolio />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
