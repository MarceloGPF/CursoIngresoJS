/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;// declaro

	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama" + " " + nombre + " " + "y tiene" + " " + edad);
}

//https://onlinegdb.com/bHGymiDTA