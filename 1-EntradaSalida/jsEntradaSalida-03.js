/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 03.
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;// usando la palabra reservada let declaro la variable nombreIngresado.

	nombreIngresado = document.getElementById ("txtIdNombre").value;/*le asigno el valor obtenido por ID (txtIdNombre.value)
	 obtenido con la propiedad .value del método de document getElementById a la variable declarada nombreIngresado.*/

	alert(nombreIngresado);// muestro el valor obtenido por el ID y asignado a la variable nombreIngresado con la función alert.

}

//https://onlinegdb.com/LRKERjxtR

