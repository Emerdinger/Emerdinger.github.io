import React from "react";
import {useParams} from "react-router-dom";
import "../index.css"
import Webdev from "../imagenes/webdev.svg"

const Inicio = () => {

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
            <div id="inicio">
                <div className="text container">
                    <h5>Crece y personaliza tu emprendimiento</h5>
                    <h1>Soy Emerson Niño</h1>
                    <p>Haz llegar tu negocio a mas personas con una página web a la medida de tus requerimientos</p>
                    <a href="https://drive.google.com/file/d/1sRJByQ0_vuWkmyiG4wKfP4GOzzKaA7PD/view"
                       download="HojaDeVidaEmerson" target="_blank">Mi hoja de vida</a>
                </div>
                <div className="back">
                    <img src={Webdev} alt="Web-dev"/>
                </div>
            </div>
            <svg className="wave-inicio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fillOpacity="1"
                      d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,160C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </React.Fragment>
    )
}

export default Inicio;