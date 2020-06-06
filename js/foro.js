var img="";
var texto="";

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

