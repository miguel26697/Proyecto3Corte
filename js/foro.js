var url = "http://ec2-34-209-88-143.us-west-2.compute.amazonaws.com";
var img="";
var texto="";

function get_categoria(){
    $.ajax({
        type : 'GET',
        url: url+"/Categories",
        headers:{
            usaHeaders: token
        },
        datType:"JSON",
        success: function(rta){
            datos_categoria(rta);
        }
    })
}

function AddCategory(non, des, log){
	$("#target").empty();
	token=getCookie("token");
	$.ajax({
		url: url + "/Category",
		type : 'POST',
		data : JSON.stringify({"name": non, "description":des, "logo":log}),
		headers: {
			usaHeader : token
		},
		contenType : "JSON",
		dataType: "JSON",
		success: function(rta){
			console.log(rta);
		}
	});
}


function datos_categoria(rta){
    for(var i =0; i<rta.length; i++){
        img = rta[i].logo;
		texto ='<div class="card">'+
		'<div class="image">'+
		'<img src="'+ img +'">'+
		'</div>'+
		'<div class="content">'+
		'<div class="header">'+rta[i].name+'</div>'+
		'<div class="description">'+rta[i].description+'</br></div>';
		$("#target").append(texto);
    }
}


var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("header").css({
		"height": "100vh",
		"background": "rgba(0,0,0,0.5)"
	})

	if ($("#inputBusqueda").val() == ""){
		$("header").css({
			"height": "auto",
			"background": "none"
		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
	}
})

