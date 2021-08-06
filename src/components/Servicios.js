import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import Web from "../imagenes/website.svg"
import Design from "../imagenes/design.svg"
import Backend from "../imagenes/backend.svg"
import Responsive from "../imagenes/responsive.svg"

const Servicios = () => {

    useEffect(() => {
        AOS.init();
    })

    const {id} = useParams();

    React.useEffect(() => {
        focusScrollMethod(id)
    });

    const focusScrollMethod = (scrolling) => {
        const scroll = document.querySelector(`#${scrolling}`);
        if (scroll) {
            scroll.scrollIntoView('smooth', 'end');
        }
    }

    return (
        <React.Fragment>
            <div id="servicios" className="text-center ">
                <div className="servicios-titulo" data-aos="fade-up">
                    <h1>Servicios</h1>
                </div>
                <div className="mis-servicios">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 mb-5" data-aos="fade-right">
                            <div className="row">
                                <div className="col-md-5 mb-3 logo-servicios">
                                    <img src={Web} alt="web-logo" />
                                </div>
                                <div className="col-md-7 center-texto">
                                    Creación de páginas web utilizando HTML, CSS y JavaScript. También puedo utilizar la
                                    librería React o el Framework Angular.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5" data-aos="fade-left">
                            <div className="row">
                                <div className="col-md-5 mb-3 logo-servicios">
                                    <img src={Design} alt="design-logo"/>
                                </div>
                                <div className="col-md-7 center-texto">
                                    Te ofrezco un diseño adaptado a tus necesidades.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 mb-5 mt-5" data-aos="fade-up">
                            <div className="row">
                                <div className="col-md-5 mb-3 logo-servicios">
                                    <img src={Backend} alt="design-logo"/>
                                </div>
                                <div className="col-md-7 center-texto">
                                    Creación de API REST utilizando NodeJS como lenguaje de BackEnd junto al framework
                                    express. Como base de datos MongoDB y Firebase como bases de datos en la nube son
                                    las que mas he utilizado.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5 mt-5 " data-aos="fade-down">
                            <div className="row">
                                <div className="col-md-5 mb-3 logo-servicios">
                                    <img src={Responsive} alt="design-logo"/>
                                </div>
                                <div className="col-md-7 center-texto">
                                    Sitios web con responsive design, adaptados a cualquier tipo de dispositivo ya sea computadores de mesa, portátiles, tablets y smartphones
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Servicios;