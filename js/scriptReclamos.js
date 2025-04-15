document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formReclamos');
    const mensajeError = document.getElementById('mensajeError');
    const mensajeExito = document.getElementById('mensajeExito');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Validar campos
        const entidad = document.getElementById('entidad').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const descripcion = document.getElementById('descripcion').value;

        if (!entidad || !fecha || !hora || !descripcion) {
            // Mostrar mensaje de error si falta algún campo
            mensajeError.classList.remove('d-none');
            mensajeExito.classList.add('d-none');
        } else {
            // Mostrar mensaje de éxito si todos los campos están completos
            mensajeExito.classList.remove('d-none');
            mensajeError.classList.add('d-none');
            form.reset(); // Limpiar el formulario
        }
    });
});