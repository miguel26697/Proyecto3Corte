$("#btnBuscar").click(function() {
    getSalon();
});



$("#btnDevolverse").click(function() {
    window.location.assign("inicio.html");
});



function cargarTorres() {
    var array = ["A", "B", "C", "D", "E"];
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
      a: ["1", "2", "3", "4", "5","6"],
      b: ["Langreo", "Villaviciosa", "Oviedo", "Gijon", "Covadonga"],
      c: ["Tui", "Cambados", "Redondella", "Porriño", "Ogrove"],
      d: ["Dos Hermanas", "Écija", "Algeciras", "Marbella", "Sevilla"],
      e: ["Caceres", "Badajoz", "Plasencia", "Zafra", "Merida"]
    }
    
    var torres = document.getElementById('torre')
    var niveles = document.getElementById('nivel')
    var torreSeleccionada = torres.value
    
    // Se limpian los pueblos
    niveles.innerHTML = '<option value="">Seleccione un Nivel...</option>'
    
    if(torreSeleccionada !== ''){
      // Se seleccionan los pueblos y se ordenan
      torreSeleccionada = listaNiveles[torreSeleccionada]
      torreSeleccionada.sort()
    
      // Insertamos los pueblos
      torreSeleccionada.forEach(function(nivel){
        let opcion = document.createElement('option')
        opcion.value = nivel
        opcion.text = nivel
        niveles.add(opcion)
      });
    }
    
  }
  
 // Iniciar la carga de provincias solo para comprobar que funciona
cargarTorres();