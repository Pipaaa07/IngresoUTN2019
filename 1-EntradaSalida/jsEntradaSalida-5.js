/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    nombre = prompt("ingresar nombre");
	document.getElementById("elNombre").value = nombre;

    var edad;
   edad = prompt("ingresar edad");
	document.getElementById("elNombre").value = edad;

    alert("usted se llama"+nombre+("y tiene")+ edad + ("años");
}

