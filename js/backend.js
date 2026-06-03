document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('contactForm');
    const success = document.getElementById('success');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // enviar correo con EmailJS
        emailjs.sendForm(
            'service_e8e3cbi',
            'template_l3yngth',
            this
        )
        .then(() => {

            success.style.display = 'block';
            success.style.color = 'green';
            success.textContent = "Mensaje enviado correctamente";

            form.reset();

            setTimeout(() => {
                success.style.display = 'none';
            }, 8000);

        })
        .catch((error) => {

            success.style.display = 'block';
            success.style.color = 'red';
            success.textContent = "Error al enviar el mensaje";

            console.log("Error:", error);

            setTimeout(() => {
                success.style.display = 'none';
            }, 8000);
        });

    });

});
