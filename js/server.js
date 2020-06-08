var wait = ms => new Promise((r, j) => setTimeout(r, ms));
var wsUri = "ws://localhost:30001";
var websocket = new WebSocket(wsUri);
var venti, numpc, proyec, tv, sillas, toma, tab;
var arreglo;

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
		arreglo = obj.arreglo;
		crearMatriz();
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

function crearMatriz() {
	var horario = new Array(7)

	var clase79 = new Array(6)
	var clase911 = new Array(6)
	var clase111 = new Array(6)
	var clase24 = new Array(6)
	var clase46 = new Array(6)
	var clase68 = new Array(6)
	var clase810 = new Array(6)
	console.log(arreglo)
	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "1") {
			clase79[arreglo[i].colu - 1] = arreglo[i].clase;
		} else {

		}
	}
	console.log(clase79);

	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "2") {
			clase911[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase911);
	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "3") {
			clase111[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase111);

	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "4") {
			clase24[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase24);

	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "5") {
			clase46[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase46);


	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "6") {
			clase68[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase68);

	for (let i = 0; i < arreglo.length; i++) {
		if (arreglo[i].fila === "7") {
			clase810[arreglo[i].colu - 1] = arreglo[i].clase;
		}
	}
	console.log(clase810);


	horario[0] = clase79;
	horario[1] = clase911;
	horario[2] = clase111;
	horario[3] = clase24;
	horario[4] = clase46;
	horario[5] = clase68;
	horario[6] = clase810;

	console.log(horario)

	for (i = 0; i < horario.length; i++) {
		texto += '<tr>';
		texto += '<td> ';
		for (j = 0; j < horario[i].length; j++) {
			if (horario[i][j] === undefined){
				texto += "<td>" + "" + "</td>";
			}else{
				texto += "<td>" + horario[i][j] + "</td>";
			}
		}
		texto += "</td>";
		texto += "</tr>";
	}
	texto += "</table>";
	$("#tabla").append(texto);
}
