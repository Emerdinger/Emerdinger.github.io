(function () {
    emailjs.init("user_M9tyz9Vrx5NYAJzjste3P");
})();

let form = document.querySelector('#mail');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    vue.enviar();
})

const vue = new Vue({
    el: '#app',
    data() {
        return {
            from_name: '',
            from_email: '',
            message: '',
            from_phone: '',
        }
    },
    methods: {
        enviar() {
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                from_phone: this.from_phone,
            };
            console.log(data);
            emailjs.send("service_f7yak5n", "template_gk5hgjx", data)
                .then(function (response) {
                    if (response.text === 'OK') {
                        alert('El correo se ha enviado de forma exitosa');
                        location.reload();
                        emailjs.send("service_f7yak5n", "template_xeutcap", data)
                    }
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function (err) {
                    alert('Ocurrió un problema al enviar el correo');
                    console.log("FAILED. error=", err);
                });
        }
    }
});
