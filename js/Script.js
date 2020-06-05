var wait = ms => new Promise((r, j) => setTimeout(r, ms));
var wsUri = "ws://localhost:30001";
var websocket = new WebSocket(wsUri);


websocket.onopen = function (evt) {
	var a = { tipo: "nuevo", user: getCookie("usuario"), hash: getCookie("hash") };
	enviarMensaje(JSON.stringify(a));
};

websocket.onmessage = function (evt) { // cuando se recibe un mensaje
	
	var obj = JSON.parse(evt.data);
	 if (obj.tipo === "conectado") {
		console.log("conectado");
	} else if (obj.tipo === "hash") {
		//Envío de código Hash para notificar a los demás que hay un nuevo conectado
		setCookie("hash", obj.hash, 10);
		var nombreUser = getCookie("usuario");
		var texto = { tipo: 'nuevo', hash: getCookie("hash"), usuario: nombreUser };
		var conectados = obj.conectados;
		
		for (let i = 0; i < conectados.length; i++) {
			var user = conectados[i];
		}
		enviarMensaje(JSON.stringify(texto));
    }

};

websocket.onerror = function (evt) {
	console.log("oho!.. error:" + evt.data);
};

function enviarMensaje(texto) {
	websocket.send(texto);
};