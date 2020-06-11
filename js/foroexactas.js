var img = "";
var texto = "";
var name = "";
var com = "";
var pregunta = [];
var repuestas = [];
var repuestas0 = [], repuestas1 = [], repuestas2 = [], repuestas3 = [], repuestas4 = [], repuestas5 = [], repuestas6 = [], repuestas7 = [];
var union = [];

var pre = "";
var valores = "";
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

$('#coments').hide();
$("#btnDevolverse").click(function() {
 	window.location.assign("foro.html");
 });

function subir_mensaje() {
	if(formulario.value ===""){
		alert("Complete los campos")
	}else{
		const texto = formulario.value;
		preguntas(texto);
	}

}

$("#boton").click(function () {
	subir_mensaje();
	limpiar();
});

function datosComen() {

	for (var i = 0; i < 100; i++) {
		if (valores.indexOf(pregunta[i]) == ! -1) {
			console.log(union);
			$("#pre").empty();
			$("#pre").append(valores)
			var datos = (Object.values(union[pregunta[i]]));
			console.log(union[pregunta[i]].length)
			 var cont = union[pregunta[i]].length
		}
	}
	$("#target").empty();
	for(var i = 0; i < cont; i++) {
	texto = '<div class="comment">' +
		'<a class="avatar">' +
		'<img src="img/p.jpg">' +
		'</a>' +
		'<div class="content">' +
		'<a class="author">' + datos[i].nombre + '</a>' +
		'<div>' + datos[i].des + '</div>' +
		'</div>' +
		'</div>'
	$("#target").append(texto);
	}

}

$("#btnl").click(function () {
	function datos(nombre, des) {
		this.nombre = nombre;
		this.des = des;
	}
	if ($("#caja1").val() === "" ||	$("#caja2").val() === "" ){
		alert("Complete los campos");
	}else{
	name = $("#caja1").val();
	com = $("#caja2").val();

	pre = new datos(name, com);
	for (let i = 0; i < 100; i++) {
		if (valores.indexOf(pregunta[i]) == ! -1) {
			console.log(i);
			if (i === 0) {
				repuestas0.push(pre);
			} else if (i === 1) {
				repuestas1.push(pre);
			} else if (i === 2) {
				repuestas2.push(pre);
			} else if (i === 3) {
				repuestas3.push(pre);
			} else if (i === 4) {
				repuestas4.push(pre);
			} else if (i === 5) {
				repuestas5.push(pre);
			} else if (i === 6) {
				repuestas6.push(pre);
			} else if (i === 7) {
				repuestas7.push(pre);
			}
		}
	}
	arrayTridimensional();
	datosComen();
	limpiar();
	}
});

function limpiar(id){
    var activo = document.activeElement.id;
    activo.innerHTML = "";
}

$("#volver").click(function () {

	$('#coments').hide();
	$('#preguntas').show();
	$('#target').empty();
	$('#caja1').val('');
	$('#caja2').empty();
	$('#formulario').empty();

});

function preguntas(rta) {
	var texto = "";
	pregunta.push(rta);
	texto += '<tr>';
	texto += '<td class="numero">' + rta + '</td>';
	texto += '<td class="boton">Ver</td>';
	texto += '</tr>';
	texto += '</table>';
	$("#tabla").append(texto);

	$(".boton").click(function () {
		valores = "";
		$(this).parents("tr").find(".numero").each(function () {
			valores += $(this).html() + "\n";
		});
		Cargar();
		datosComen();
	});

}
var cont;

function Cargar() {
	$('#preguntas').hide();
	$('#coments').show();
}

function arrayTridimensional() {
	console.log(valores);
	for (let i = 0; i < 100; i++) {
		if (valores.indexOf(pregunta[i]) == ! -1) {
			console.log(i);
			console.log(repuestas.join(String(i)));
			if (i === 0) {
				union[pregunta[i]] = repuestas0;
			} else if (i === 1) {
				union[pregunta[i]] = repuestas1;
			} else if (i === 2) {
				union[pregunta[i]] = repuestas2;
			} else if (i === 3) {
				union[pregunta[i]] = repuestas3;
			} else if (i === 4) {
				union[pregunta[i]] = repuestas4;
			} else if (i === 5) {
				union[pregunta[i]] = repuestas5;
			} else if (i === 6) {
				union[pregunta[i]] = repuestas6;
			} else if (i === 7) {
				union[pregunta[i]] = repuestas7;
			}
		}
	}
	console.log(union)
}



function limpiar(){
     document.getElementById("formulario").value = "";
     document.getElementById("caja1").value = "";
     document.getElementById("caja2").value = "";
}