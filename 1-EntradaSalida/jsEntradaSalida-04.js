/* 
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 04.
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoNombre;// declaro la variable datoNombre con la palabra reservada let.

	datoNombre = prompt("Ingrese su nombre");// asigno el valor a la variable declarada con el resultado de la función promt.

	document.getElementById("txtIdNombre").value = datoNombre;// muestro en el campo de ID del html el valor obtenido


	
}

//https://onlinegdb.com/G-kB2i7lM

