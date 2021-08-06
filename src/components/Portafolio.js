import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import Youtube from "../imagenes/youtube.PNG"
import Triviate from "../imagenes/triviate.PNG"
import Regresiones from "../imagenes/regresiones.PNG"
import Arriendate from "../imagenes/arriendate.PNG"
import Daltopc from "../imagenes/daltopc.PNG"
import Gymfit from "../imagenes/gymfit.PNG"
import Noticias from "../imagenes/noticias.PNG"
import Restaurante from "../imagenes/restaurante.PNG"
import ImagenesVideos from "../imagenes/imagenesvideos.PNG"

const Portafolio = () => {

    useEffect(() => {
        AOS.init()
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
            <div id="portafolio">
                <div className="container">
                    <div className="portafolio-title text-center" data-aos="zoom-in">
                        <h1>Portafolio</h1>
                    </div>
                    <div className="grid-portafolio text-center">
                        <a href="https://emerdinger.github.io/Youtube-clon/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>YouTube</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Youtube} alt="Youtube-clon"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/triviate/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2" >
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Triviate</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Triviate} alt="Triviate"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/calculadoraRegresiones/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Regresiones lineales</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Regresiones} alt="Regresiones"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/arriendate/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Arriendate</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Arriendate} alt="Arriendate"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/noticias/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Noticias</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Noticias} alt="Noticias"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/soydaltopc/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>DaltoPc</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Daltopc} alt="DaltoPC"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/gym/#/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>GymFit</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Gymfit} alt="GymFit"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/imagenesFree/" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Free Images</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={ImagenesVideos} alt="Imagenes-Videos"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://emerdinger.github.io/restaurant/#/inicio" rel="noreferrer" target="_blank"
                           className="mt-4 p-2">
                            <div className="card-portafolio" data-aos="zoom-in-up">
                                <div className="card-title mt-3">
                                    <h3>Restaurante</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={Restaurante} alt="Restaurante"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Portafolio;