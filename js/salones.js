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

 		/*
 	var texto ;
 	texto = "El numero de opciones del select: " + document.getElementById("Terminacion").value;
 	var indice = document.getElementById("Terminacion").selectedIndex ;
 	texto += "nIndice de la opcion escogida: " + indice ;
 	var valor = document.getElementById("Terminacion").options[1].value 
 	texto += "nValor de la opcion escogida: " + valor ;
 	var textoEscogido = document.getElementById("Terminacion").options[1].text 
 	texto += "nTexto de la opcion escogida: " + textoEscogido ;
 	alert(indice);
 	*/
 }
