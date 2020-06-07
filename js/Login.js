$("#btnEntrar").click(function () {
    window.location.assign("login.html");
});

$("#login").click(function () {
    window.location.assign("inicio.html");
});

function registro(){
    $.ajax({
        type: "POST",
        url: "http://ec2-34-209-88-143.us-west-2.compute.amazonaws.com/Register",
        data: JSON.stringify({ "name": "miguel", "password": "rippe301", "email": "miguel.rippe01@correo.usa.edu.co" }),
        dataType: 'JSON',
        success: function (rta) {
            console.log(rta);
            alert(rta);
        },
        error: function (err) {
            alert("Error" + JSON.stringify(err));
        }

    });
}

function ingreso() {
    correo = $("#correo").val();
    clave = $("#contra").val();
    console.log(correo);
    console.log(clave);
    $.ajax({
        type: "POST",
        url: "http://ec2-34-209-88-143.us-west-2.compute.amazonaws.com/Login",
        data: JSON.stringify({ "password": clave, "email": correo }),
        dataType: 'JSON',
        success: function (token) {
            console.log(token);
            document.cookie = "token=" + token;
            window.location.assign("principal.html");

        },
        error: function (err) {
            alert("Acceso denegado");
        },
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }