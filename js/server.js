var wait = ms => new Promise((r, j) => setTimeout(r, ms));
var wsUri = "ws://localhost:30001";
var websocket = new WebSocket(wsUri);
var venti, numpc, proyec, tv, sillas, toma, tab;
var arreglo,salon,arreglore,estado;
var horario = new Array(8);
websocket.onopen = function (evt) {
	var a = { tipo: "nuevo", user: getCookie("usuario"), hash: getCookie("hash") };
	enviarMensaje(JSON.stringify(a));
	let nuevoOption = 'Ausente';

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

		$("#ventilacion").empty();
		$("#proyector").empty();
		$("#televisor").empty();
		$("#toma_corriente").empty();
		$("#tablero").empty();
		$("#silla").empty();

		$("#ventilacion").append("Ventilacion: " + venti);
		$("#num_computadores").empty();
		$("#num_computadores").append("Numero de computadores: " + numpc);
		$("#proyector").append("Proyector: " + proyec);
		$("#televisor").append("Televisor: " + tv);
		$("#toma_corriente").append("Numero de toma corrientes: " + toma);
		$("#tablero").append("Tipo de tablero: " + tab);
		$("#silla").append("Tipo de sillas en el salon: " + sillas);

	} else if (obj.tipo === "horario") {
		arreglo = obj.arreglo;
		crearMatriz();
	}
	else if (obj.tipo ==="reserva"){
		arreglore=obj.arreglo;
		$("#ventilacion").empty();
		$("#proyector").empty();
		$("#televisor").empty();
		for(var i=0;i<arreglore.length;i++){	
			$("#diare").append("</br>");
			$("#horare").append("</br>");
			$("#tema").append("</br>");
			$("#diare").append(""+arreglore[i].colu);
			$("#horare").append(""+arreglore[i].fila);
			$("#tema").append(""+arreglore[i].tema);

		}

		console.log(arreglore);

	}
	else if(obj.tipo === "reservar"){
		var estado= obj.ven;

		console.log(estado);



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
	salon = torre + nivel + terminacion;
	console.log(salon);
	var mensa = { tipo: "salon", idsalon: salon };
	enviarMensaje(JSON.stringify(mensa));

}
function reserva(){
	var mensa = { tipo: "reserva", idsalon: salon };
	enviarMensaje(JSON.stringify(mensa));



}
function reservar(){
	var hora=document.getElementById("hora1").value;
	var dia=document.getElementById("dia10").value;
	var colu;
	var fila;
	var tema=$("#tema10").val();
	var dias=new Array(" Domingo ", "Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
	var fecha= new Array("","","");
	fecha[0]=dia.substr(0,4);
	fecha[1]=dia.substr(5,2);
	fecha[2]=dia.substr(8,8)
	var a=(14-parseInt(fecha[1]))/12;
	var y=parseInt(fecha[0])-parseInt(a);
	var m= parseInt(fecha[1])+12*parseInt(a)-2;
	var d=(parseInt(fecha[2])+parseInt(y)+parseInt(y)/4-parseInt(y)/100+parseInt(y)/400+(31*parseInt(m))/12)%7;
	fe=dias[parseInt(d)];

	if(fe==="Lunes"){
		colu =0;

	}
	else if(fe==="Martes"){
		colu =1;

	}
	else if(fe==="Miercoles"){
		colu =2;

	}
	else if(fe==="Jueves"){
		colu =3;

	}
	else if(fe==="Viernes"){
		colu =4;

	}
	else if(fe==="Sabado"){
		colu =5;

	}


	if(hora==="07:00:00"){
		fila =1;

	}
	else if(hora==="09:00:00"){
		fila =2;

	}
	else if(hora==="11:00:00"){
		fila =3;

	}
	else if(hora==="14:00:00"){
		fila =4;

	}
	else if(hora==="16:00:00"){
		fila =5;

	}
	else if(hora==="18:00:00"){
		fila=6;

	}
	else if(hora==="20:00:00"){
		fila =7;

	}

	console.log(colu);
	console.log(fila);
	console.log(horario[fila][colu]);
	if(horario[fila][colu]===undefined){
console.log("hola")
		var mensa = { tipo: "reservar", horare: hora , diare:dia,te:tema,idsalon:salon};
		enviarMensaje(JSON.stringify(mensa));

	}
	


}





function crearMatriz() {

	var titulos = new Array(6)
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
	titulos[0] = "LUNES";
	titulos[1] = "MARTES";
	titulos[2] = "MIERCOLES";
	titulos[3] = "JUEVES";
	titulos[4] = "VIERNES";
	titulos[5] = "SABADO";

	

	horario[0] = titulos;
	horario[1] = clase79;
	horario[2] = clase911;
	horario[3] = clase111;
	horario[4] = clase24;
	horario[5] = clase46;
	horario[6] = clase68;
	horario[7] = clase810;

	console.log(horario)
	$("#tabla").empty();
	$("#tabla2").empty();
	texto = "";
	for (i = 0; i < horario.length; i++) {
		texto += '<tr>';
		if (i === 0) {
			texto += '<td >  HORA </td>';
		}
		if (i === 1) {
			texto += '<td> 7:00-9:00 </td>';
		}
		if (i === 2) {
			texto += '<td> 9:00-11:00 </td>';
		}
		if (i === 3) {
			texto += '<td> 11:00-1:00 </td>';
		}
		if (i === 4) {
			texto += '<td> 2:00-4:00 </td>';
		}
		if (i === 5) {
			texto += '<td> 4:00-6:00 </td>';
		}
		if (i === 6) {
			texto += '<td> 6:00-8:00 </td>';
		}
		if (i === 7) {
			texto += '<td> 8:00-10:00 </td>';
		}



		for (j = 0; j < horario[i].length; j++) {
			if (horario[i][j] === undefined) {
				texto += "<td>" + "" + "</td>";
			} else {
				texto += "<td>" + horario[i][j] + "</td>";
			}
		}







		texto += "</tr>";
	}
	texto += "</table>";
	$("#tabla").append(texto);
	$("#tabla2").append(texto);
	clase79 = [];
	clase911 = [];
	clase111 = [];
	clase24 = [];
	clase46 = [];
	clase68 = [];
	clase810 = [];

}
