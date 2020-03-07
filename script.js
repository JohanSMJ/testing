var mensajes=["Hola","Qué tal?","Talvez estes cansada","PERO...","Quiero decirte","Que me pareces muy divertida","Y agradable","Así que me gustaría decirte"];

var capa= document.getElementById('contenedor');
var time= 7000;
for (var i = 0; i < mensajes.length; i++) {
	imprimir(mensajes[i]);
}


function imprimir(argument) {
	var a = document.createElement("h2");
	a.innerHTML = '<h2 class="mensaje">'+argument +'</h2>';
	capa.appendChild(a);
}

function conocer() {
	capa.innerHTML="";
	imprimir("Si te gustó: Preguntáme que quiero decirte");
	imprimir("Si no te gustó:No digas nada");
}

