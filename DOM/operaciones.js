function alta () {
	var capacambio = document.getElementById("tabla");
	var nombre = prompt("Introduce el nombre", "");
	var apellido = prompt("Introduce el apellido", "");
	var edad = prompt("Introduce la edad", "");
	var ciudad = prompt("Introduce la ciudad", "");

	texto="";
	texto += "<tr><td>" + nombre + "</td>";
	texto += "<td>" + apellido + "</td>";
	texto += "<td>" + edad + "</td>";
	texto += "<td>" + ciudad + "</td></tr>";

	capacambio.innerHTML += texto;
}