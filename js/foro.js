var url = "http://ec2-34-209-88-143.us-west-2.compute.amazonaws.com";
var img = "";
var texto = "";
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

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
boton.addEventListener('click', filtar)

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

	












