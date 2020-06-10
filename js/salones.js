$('#botones').hide();
$('#inicio2').hide();
$("#btnBuscar").click(function () {
    getSalon();
    select();
});
$("#btnDevolverse").click(function () {
    window.location.assign("inicio.html");
});
$("#btnVentilacion").click(function () {
    mostrar_ocultar('ventilacion');
    $('#num_computadores').hide(); $('#proyector').hide(); $('#televisor').hide();
    $('#toma_corriente').hide(); $('#tablero').hide();$('#silla').hide();
   
});
$("#btnNum_Computadores").click(function () {
    mostrar_ocultar('num_computadores');
    $('#ventilacion').hide(); $('#proyector').hide(); $('#televisor').hide();
    $('#toma_corriente').hide(); $('#tablero').hide();$('#silla').hide();
});
$("#btnProyector").click(function () {
    mostrar_ocultar('proyector');
    $('#ventilacion').hide(); $('#num_computadores').hide(); $('#televisor').hide();
    $('#toma_corriente').hide(); $('#tablero').hide();$('#silla').hide();
});
$("#btnTelevisor").click(function () {
    mostrar_ocultar('televisor');
    $('#ventilacion').hide(); $('#num_computadores').hide(); $('#proyector').hide();
    $('#toma_Corriente').hide(); $('#tablero').hide();$('#silla').hide();
});
$("#btnToma_Corriente").click(function () {
    mostrar_ocultar('toma_corriente');
    $('#ventilacion').hide(); $('#num_computadores').hide(); $('#proyector').hide();
    $('#televisor').hide(); $('#tablero').hide();$('#silla').hide();
});
$("#btnTablero").click(function () {
    mostrar_ocultar('tablero');
    $('#ventilacion').hide(); $('#num_computadores').hide(); $('#proyector').hide();
    $('#televisor').hide(); $('#toma_corriente').hide();$('#silla').hide();
});
$("#btnSilla").click(function () {
    mostrar_ocultar('silla');
    $('#ventilacion').hide(); $('#num_computadores').hide(); $('#proyector').hide();
    $('#televisor').hide(); $('#toma_corriente').hide();$('#tablero').hide();
});
$("#btnReserva").click(function () {
    mostrar_ocultar('inicio2');
    $('#inicio').hide();
    crearMatriz();
    reserva();
});

$("#btnReservar").click(function () {
    reservar();
});
$("#btnVolver").click(function () {
    mostrar_ocultar('inicio');
    $('#inicio2').hide();
});

function mostrar_ocultar(id) {
    var elemento = document.getElementById(id);
    if (!elemento) {
        return true;
    }
    if (elemento.style.display == "none") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    };
    return true;
};
function select() {
    var ter = document.getElementById("terminacion").selectedIndex;
    if (ter === 0) {
        alert("Complete los campos");
        $('#botones').hide();
        $('#num_computadores').hide(); $('#proyector').hide(); $('#televisor').hide();
        $('#toma_corriente').hide(); $('#tablero').hide(); $('#ventilacion').hide();$('#silla').hide();
    } else {
        $('#botones').show();
        mostrar_ocultar('mostrar_ocultar');
    }
}



window.addEventListener("load", function () {
    cargarTorres(event);

});
function cargarTorres() {
    var array = ["A", "B", "C", "D", "E", "F"];
    array.sort();
    addOptions("torre", array);

}
//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (torre in array) {
        var opcion = document.createElement("option");
        opcion.text = array[torre];
        // Añadimos un value a los option para hacer mas facil escoger los pueblos
        opcion.value = array[torre].toLowerCase()
        selector.add(opcion);
    }
}
function cargarNiveles() {
    // Objeto de provincias con pueblos
    var listaNiveles = {
        a: ["1", "2", "3", "4", "5"],
        b: ["1", "2", "3", "4"],
        c: ["1", "2", "3", "4", "5"],
        d: ["1", "2", "3", "4", "5"],
        e: ["1", "2", "3", "4", "5"],
        f: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }

    var torres = document.getElementById('torre')
    var niveles = document.getElementById('nivel')
    var torreSeleccionada = torres.value

    // Se limpian los pueblos
    niveles.innerHTML = '<option value="">Seleccione un Nivel...</option>'

    if (torreSeleccionada !== '') {
        // Se seleccionan los pueblos y se ordenan
        torreSeleccionada = listaNiveles[torreSeleccionada]
        torreSeleccionada.sort()

        // Insertamos los pueblos
        torreSeleccionada.forEach(function (nivel) {
            let opcion = document.createElement('option')
            opcion.value = nivel
            opcion.text = nivel
            niveles.add(opcion)
        });
    }

}
