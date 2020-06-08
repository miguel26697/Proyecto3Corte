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
 	var ter = document.getElementById("terminacion").selectedIndex ;
 	if (ter===0) {
 		alert("faltan argumentos");
 		$('#botones').hide();
 		$('#num_computadores').hide();$('#proyector').hide();$('#televisor').hide();
 		$('#toma_corriente').hide();$('#tablero').hide();$('#ventilacion').hide();
 	}else{
 		$('#botones').show();
 		mostrar_ocultar('mostrar_ocultar');
 	}
 }
 function capturaSelect(){
 	var ter = document.getElementById("Terminacion").selectedIndex ;
 	var textoTer = document.getElementById("Terminacion").options[ter].text ;
 	alert("Terminacion:  "+textoTer);	
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