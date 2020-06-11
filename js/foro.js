var url = "http://ec2-34-209-88-143.us-west-2.compute.amazonaws.com";
var img = "";
var texto = "";
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
 $("#btnDevolverse").click(function() {
 	window.location.assign("inicio.html");
 });

const filtar = () => {
	//console.log(formulario.value);
	resultado.innerHTML = '';

	const texto = formulario.value.toLowerCase();

	for (let foro of foros) {
		let nombre = foro.nombre.toLowerCase();
		if (nombre.indexOf(texto) !== -1) {
			resultado.innerHTML += `
			<li>${foro.nombre}</li>	
			`
		}
	}
	if (resultado.innerHTML == '') {
		resultado.innerHTML += `
			<li> Foro no encontrado....</li>
		`
	}
}

const foros = [
	{ nombre: 'Ciencias aplicladas' },
	{ nombre: 'Ciencias politicas' },
	{ nombre: 'Idiomas' },
	{ nombre: 'Artes' },
	{ nombre: 'Derecho' },
	{ nombre: 'progremación' },
]




function foroP(){
	window.location.assign("foro_ciencias_p.html");
}

function foroCiencias(){
	window.location.assign("foro_exactas.html");
	cargarp();
}

function foroArte(){
	window.location.assign("foro_artes.html");
}

function foroFilo(){
	window.location.assign("foro_filosofia.html");
}

function foroEcono(){
	window.location.assign("foro_economia.html");
}

	












