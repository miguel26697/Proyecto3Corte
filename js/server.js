var wait = ms => new Promise((r, j) => setTimeout(r, ms));
var wsUri = "ws://localhost:30001";
var websocket = new WebSocket(wsUri);
var venti, numpc, proyec, tv, sillas, toma, tab;

websocket.onopen = function (evt) {
	var a = { tipo: "nuevo", user: getCookie("usuario"), hash: getCookie("hash") };
	enviarMensaje(JSON.stringify(a));

	let nuevoOption = 'Ausente';
	$('#torre').append(`<option value="${nuevoOption}">${nuevoOption}</option>`);
};

websocket.onmessage = function (evt) {

	var obj = JSON.parse(evt.data);
	if (obj.tipo === "conectado") {
		console.log("conectado");
	} else if (obj.tipo === "hash") {

		setCookie("hash", obj.hash, 10);
		var nombreUser = getCookie("usuario");
		var texto = { tipo: 'nuevo', hash: getCookie("hash"), usuario: nombreUser };
		var conectados = obj.conectados;

		for (let i = 0; i < conectados.length; i++) {
			var user = conectados[i];
		}
		enviarMensaje(JSON.stringify(texto));

	} else if (obj.tipo === "infsalon") {
		venti = obj.ven;
		numpc = obj.numpc;
		proyec = obj.pro;
		tv = obj.tv;
		sillas = obj.sil;
		toma = obj.toma;
		tab = obj.tab;
	} else if (obj.tipo === "horario") {
		console.log(obj)
		for (let i = 0; i < obj.dia.length; i++) {
			console.log(obj.dia[i]);

		}
	} else if (obj.tipo === "horario1") {
		console.log(obj)
		for (let i = 0; i < obj.hora.length; i++) {
			console.log(obj.hora[i]);

		}
	} else if (obj.tipo === "horario2") {
		console.log(obj)
		for (let i = 0; i < obj.clase.length; i++) {
			console.log(obj.clase[i]);
		}
	}
};

websocket.onerror = function (evt) {
	console.log("oho!.. error:" + evt.data);
};

function enviarMensaje(texto) {
	websocket.send(texto);
};

function getSalon() {
	var torre = document.getElementById("torre").value;
	var nivel = document.getElementById("nivel").value;
	var terminacion = document.getElementById("terminacion").value;
	var salon = torre + nivel + terminacion;
	console.log(salon);
	var mensa = { tipo: "salon", idsalon: salon };
	enviarMensaje(JSON.stringify(mensa));

}