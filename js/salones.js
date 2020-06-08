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