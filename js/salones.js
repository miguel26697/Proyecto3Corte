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
    //Inicializamos el array.
    var array = ["A","B","C","D","F"];
    //Ordena el array alfabeticamente.
    array.sort();
    //Pasamos a la funcion addOptions(el ID del select, las torres cargadas en el array).
    addOptions("Torre", array);
    cargarNiveles();
}
//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
	var selector = document.getElementsByName(domElement)[0];
    //Recorremos el array.
    for (Torre in array) {
    	var opcion = document.createElement("option");
    	opcion.text = array[Torre];
    	selector.add(opcion);
    }
}
//Función para cargar los niveles al campo "select" dependiendo de la torre elegida.
function cargarNiveles() {
    //Objeto de niveles con las torres correspondientes.
    var listaNiveles = {
    	A: ["1","2","3","4","5"],
    	B: ["1","2","3","4"],
    	C: ["1","2","3","4","5","6","7"],
    	D: ["1","2","3","4","5","6","7"],
    	E: ["1","2","3","4","5"],
    	F: ["1","2","3","4","5","6","7","8","9","10"]
    }
    //Declaramos un array donde guardamos todos los elementos de tipo id=Torre e id=Nivel.
    var torres = document.getElementById('Torre');
    var niveles = document.getElementById('Nivel');
    //Tomamos como torreSeleccionada, el valor del id Torre (var torres).
    var torreSeleccionada = torres.value;
    //Se limpian los niveles.
   niveles.innerHTML = '<option value="">Seleccione un nivel...</option>';
    //Si existe torreSeleccionada...
    if(torreSeleccionada !== ""){
        //Se seleccionan los niveles y se ordenan.
        torreSeleccionada = listaNiveles[torreSeleccionada];
        //Insertamos los pueblos mediante un FOR.
        torreSeleccionada.forEach(function(Nivel){
        	let opcion = document.createElement('option');
        	opcion.value= Nivel;
        	opcion.text = Nivel;
        	niveles.add(opcion);
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