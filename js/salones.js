 $('#botones').hide();
 $("#btnBuscar").click(function() {
 	select();
 });
 $("#btnDevolverse").click(function() {
 	window.location.assign("inicio.html");
 });
 $("#btnVentilacion").click(function() {
 	mostrar_ocultar('ventilacion');
 	$('#num_computadores').hide();$('#proyector').hide();$('#televisor').hide();
 	$('#toma_corriente').hide();$('#tablero').hide();
 	capturaSelect();
 	modificaSelect();
 });
 $("#btnNum_Computadores").click(function() {
 	mostrar_ocultar('num_computadores');
 	$('#ventilacion').hide();$('#proyector').hide();$('#televisor').hide();
 	$('#toma_corriente').hide();$('#tablero').hide();
 });
 $("#btnProyector").click(function() {
 	mostrar_ocultar('proyector');
 	$('#ventilacion').hide();$('#num_computadores').hide();$('#televisor').hide();
 	$('#toma_corriente').hide();$('#tablero').hide();
 });
 $("#btnTelevisor").click(function() {
 	mostrar_ocultar('televisor');
 	$('#ventilacion').hide();$('#num_computadores').hide();$('#proyector').hide();
 	$('#toma_Corriente').hide();$('#tablero').hide();
 });
 $("#btnToma_Corriente").click(function() {
 	mostrar_ocultar('toma_corriente');
 	$('#ventilacion').hide();$('#num_computadores').hide();$('#proyector').hide();
 	$('#televisor').hide();$('#tablero').hide();
 });
 $("#btnTablero").click(function() {
 	mostrar_ocultar('tablero');
 	$('#ventilacion').hide();$('#num_computadores').hide();$('#proyector').hide();
 	$('#televisor').hide();$('#toma_corriente').hide();
 });
 function mostrar_ocultar(id) {
 	var x = document.getElementById(id);
 	if (x.style.display === 'block') {
 		x.style.display = 'none';
 	} else {
 		x.style.display = 'block';
 	}
 }
 function select(){ 
 	var ter = document.getElementById("Terminacion").selectedIndex ;
 	var niv = document.getElementById("Nivel").selectedIndex ;
 	var torr = document.getElementById("Torre").selectedIndex ;
 	if (ter===0 || niv===0 || torr===0 ) {
 		alert("faltan argumentos");
 		$('#botones').hide();
 		$('#num_computadores').hide();$('#proyector').hide();$('#televisor').hide();
 		$('#toma_corriente').hide();$('#tablero').hide();$('#ventilacion').hide();
 	}else{
 		$('#botones').show();
 	}
 }
 function capturaSelect(){
 	var ter = document.getElementById("Terminacion").selectedIndex ;
 	var niv = document.getElementById("Nivel").selectedIndex ;
 	var torr = document.getElementById("Torre").selectedIndex ;
 	var textoTer = document.getElementById("Terminacion").options[ter].text ;
 	var textoNiv = document.getElementById("Nivel").options[niv].text ;
 	var textoTorr = document.getElementById("Torre").options[torr].text ;
 	alert("Terminacion:  "+textoTorr+textoNiv+textoTer);	
 }
 function modificaSelect(){
 	var torr = document.getElementById("Torre").selectedIndex ;
 	var niv = document.getElementById("Nivel").selectedIndex ;
 	if (torr === 2 && niv===5 || torr === 2 && niv===6  ) {
 		alert("no existe");
 	}
 	if (torr === 2 ) {
 		var textoNiv = document.getElementById("Nivel").options[5].hide;
 	}
 }


 window.addEventListener("load", function() {
 	cargarTorres(event);

 });
function cargarTorres() {
    var array = ["A", "B", "C", "D", "E","F"];
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
      f: ["1", "2", "3", "4", "5","6","7","8","9"]
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
  function cargarTerminaciones() {
    // Objeto de provincias con pueblos
    var listaTerminaciones = {
      1: ["01", "02", "03", "04", "05"],
      2: ["01", "02", "03", "04"],
      3: ["01", "02", "03", "04", "05"],
      4: ["01", "02", "03", "04", "05"],
      5: ["01", "02", "03", "04", "05"],
      6: ["01", "02", "03", "04", "05","06","07","08","09"]
    }
    
    var niveles = document.getElementById('nivel')
    var terminaciones = document.getElementById('terminacion')
    var nivelSeleccionada = niveles.value
    // Se limpian los pueblos
    terminaciones.innerHTML = '<option value="">Seleccione un Nivel...</option>'
    
    if(nivelSeleccionada !== ''){
      // Se seleccionan los pueblos y se ordenan
      nivelSeleccionada = listaTerminaciones[nivelSeleccionada]
      nivelSeleccionada.sort()
    
      // Insertamos los pueblos
      torreSeleccionada.forEach(function(terminacion){
        let opcion = document.createElement('option')
        opcion.value = terminacion
        opcion.text = terminacion
        terminaciones.add(opcion)
      });
    }
    
  }
  /*
var texto =  document.getElementById("Terminacion").value;
 	var indiceTer = document.getElementById("Terminacion").selectedIndex ;
 	var valor = document.getElementById("Terminacion").options[1].value ;
 	var textoEscogido = document.getElementById("Terminacion").options[indiceTer].text ;
 	alert("tex"+""+texto);
 	alert("indice"+""+indice);
 	alert("valor"+""+valor);
 	alert("textoEscogido"+""+textoEscogido);
 	*/
/*alert("tex"+""+texto);
 	alert("indice"+""+indice);
 	alert("valor"+""+valor);*/