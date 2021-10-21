import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import Youtube from "../imagenes/youtube.PNG"
import TheOctoWorld from "../imagenes/theoctoworld.PNG"
import Triviate from "../imagenes/triviate.PNG"
import Regresiones from "../imagenes/regresiones.PNG"
import Arriendate from "../imagenes/arriendate.PNG"
import Daltopc from "../imagenes/daltopc.PNG"
import Gymfit from "../imagenes/gymfit.PNG"
import Noticias from "../imagenes/noticias.PNG"
import Restaurante from "../imagenes/restaurante.PNG"
import ImagenesVideos from "../imagenes/imagenesvideos.PNG"
import Mygg from "../imagenes/mygg.PNG"

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
        <div id="portafolio">
            <div className="portafolio-title text-center">
                <h1>Portafolio</h1>
            </div>
            <div className="grid-portafolio container">
                <div className="card-portafolio" style={{
                    background: `url(${TheOctoWorld})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Youtube})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Triviate})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Arriendate})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Gymfit})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${ImagenesVideos})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Restaurante})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Noticias})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Daltopc})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Regresiones})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
                <div className="card-portafolio" style={{
                    background: `url(${Mygg})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    height: "300px"
                }}>
                </div>
            </div>
        </div>
    )
}

export default Portafolio;