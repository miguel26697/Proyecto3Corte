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

function get_categoria() {
	$.ajax({
		type: 'GET',
		url: url + "/Categories",
		headers: {
			usaHeaders: token
		},
		datType: "JSON",
		success: function (rta) {
			datos_categoria(rta);
		}
	})
}

function AddCategory(non, des, log) {
	$("#target").empty();
	token = getCookie("token");
	$.ajax({
		url: url + "/Category",
		type: 'POST',
		data: JSON.stringify({ "name": non, "description": des, "logo": log }),
		headers: {
			usaHeader: token
		},
		contenType: "JSON",
		dataType: "JSON",
		success: function (rta) {
			console.log(rta);
		}
	});
}






