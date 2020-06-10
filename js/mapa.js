//ocultar();
//window.addEventListener("load",mostrar_ocultar);
$("#btn1").click(function() {
	mostrar_ocultar('descripcion1');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn2").click(function() {
	mostrar_ocultar('descripcion2');
	$('#descripcion1').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn3").click(function() {
	mostrar_ocultar('descripcion3');
	$('#descripcion1').hide();$('#descripcion2').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn4").click(function() {
	mostrar_ocultar('descripcion4');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion1').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn5").click(function() {
	mostrar_ocultar('descripcion5');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion1').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn6").click(function() {
	mostrar_ocultar('descripcion6');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion1').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn7").click(function() {
	mostrar_ocultar('descripcion7');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion1').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn8").click(function() {
	mostrar_ocultar('descripcion8');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion1').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn9").click(function() {
	mostrar_ocultar('descripcion9');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion1').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn10").click(function() {
	mostrar_ocultar('descripcion10');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion1').hide();$('#descripcion11').hide();$('#descripcion12').hide();
});
$("#btn11").click(function() {
	mostrar_ocultar('descripcion11');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion1').hide();$('#descripcion12').hide();
});
$("#btn12").click(function() {
	mostrar_ocultar('descripcion12');
	$('#descripcion2').hide();$('#descripcion3').hide();$('#descripcion4').hide();$('#descripcion5').hide();
	$('#descripcion6').hide();$('#descripcion7').hide();$('#descripcion8').hide();$('#descripcion9').hide();
	$('#descripcion10').hide();$('#descripcion11').hide();$('#descripcion1').hide();
});
$("#btnDevolverse").click(function() {
    window.location.assign("inicio.html");
});
function mostrar_ocultar(id) {
	var x = document.getElementById(id);
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}

}