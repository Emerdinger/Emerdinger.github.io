import React, {useEffect} from "react";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"

const Contacto = () => {

    useEffect(() => {
        AOS.init();
    })

    const enviarEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            from_name: document.querySelector(".nombres").value,
            from_email: document.querySelector(".email").value,
            message: document.querySelector(".mensaje").value,
            from_phone: document.querySelector(".telefono").value,
        }

        emailjs.send('service_f7yak5n', 'template_gk5hgjx', templateParams,"user_M9tyz9Vrx5NYAJzjste3P")
            .then(function(response) {
                Swal.fire({
                    title: 'Correo enviado correctamente!',
                    text: 'Me pondré en contacto contigo pronto 👾',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                }).then(() => window.location.reload());
            }, function(error) {
                Swal.fire({
                    title: 'Algo salio mal!',
                    text: 'Algo no salio como esperábamos 👾',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                }).then(() => window.location.reload());
            });
    }

    return (
        <div className="text-center pb-5" id="contacto">
            <header className="page-header mb-3" data-aos="zoom-in-right" data-aos-duration="1000">
                <h1 className="page-title">Contáctame</h1>
            </header>
            <p data-aos="zoom-in-up" data-aos-duration="1000">Si tienes alguna duda o quieres ponerte en contacto
                conmigo puedes
                enviarme un correo electronico llenando el
                siguiente formuario y yo me pondré en contácto contigo.
            </p><br/>
            <form onSubmit={enviarEmail} data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="" id="app">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <input required type="text" className="form-control nombres"
                                   placeholder="Nombres"
                                   aria-label="name"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <input required type="email" className="form-control email"
                                   placeholder="Email"
                                   aria-label="name"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col-md-4">
                            <input required type="number" className="form-control telefono"
                                   placeholder="Teléfono"
                                   aria-label="name" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-md-12 mensaje">
                        <textarea required placeholder="Escribe tú mensaje aquí..."
                                  className="form-control"
                                  rows="9" />
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-12 text-center">
                        <button className="btn btn-success" type="submit">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contacto;