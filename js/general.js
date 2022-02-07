$(document).ready(function () {
    $("#modificarTiempos").click(function () {
        $("#paros").toggleClass("d-none");
        $("#modificar").toggleClass("d-none");
    });
    $('.multi_select').selectpicker();
    $('.inner.show').attr('id', 'style-2');

});
function getDay(day) {
    var d = new Date();
    var dia = new Array(7);
    dia[0] = "Domingo";
    dia[1] = "Lunes";
    dia[2] = "Martes";
    dia[3] = "Miercoles";
    dia[4] = "Jueves";
    dia[5] = "Viernes";
    dia[6] = "Sabado";

    return dia[day];
}

function dateHour() {
    var d = new Date();
}

function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        let files = Array.from(input.files);
        let inputFile = document.getElementById("nameArchivoFile").innerHTML = files[0].name;
        console.log(files[0].name);
    };
    input.click();

}

window.onload = function () {
    cargarDatos();
}

function cargarDatos() {
    var children=$('#equiposList');
    var directorioActivo = [
        { 'Id': '101', 'Name': 'Antonio Enrique Alvarado' },
        { 'Id': '103', 'Name': 'Enrique David Ardila-' },
        { 'Id': '104', 'Name': 'David Jose Anzola' },
    ];
    directorioActivo.sort();
    for (var i = 0; i < directorioActivo.length; i++) {
        children.append("<option value='" + directorioActivo[i].Id + "'>" + directorioActivo[i].Name + "</option>");
    }
}
function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
    for (value in array) {
        var option = document.createElement("option");
        option.value = array[value].Value;
        option.text = array[value].Name;
        select.add(option);
    }
}
function fnTiemposInactividad() {
    $("#paros").toggleClass("d-none");
    $("#modificar").toggleClass("d-none");
}
