
function obtenerHora() {
    let fechaActual = new Date();

    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let parrafoFecha = document.getElementById('fecha');

    document.getElementById("fecha").innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    // Obtener la hora, minutos y segundos actuales
    var hora = fechaActual.getHours();
    var minuto = fechaActual.getMinutes();
    var segundo = fechaActual.getSeconds();

    // Agregar un cero delante de los números menores a 10
    if (hora < 10) hora = "0" + hora;
    if (minuto < 10) minuto = "0" + minuto;
    if (segundo < 10) segundo = "0" + segundo;



    // Mostrar la hora 
    document.getElementById("hora").innerHTML = hora + ":" + minuto + ":" + segundo;

} setInterval(obtenerHora, 1000)

