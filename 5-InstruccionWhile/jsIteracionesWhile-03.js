/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio WHILE 03.
*/
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave:");

	while( claveIngresada != "utn750")
	{
		alert("Su clave es incorrecta");

		claveIngresada = prompt("ingrese nuevamente el número clave.");
	}

	alert("Su clave es correcta!");


	
}//FIN DE LA FUNCIÓN
/*

https://onlinegdb.com/MrH7lRHMi

*/
/*



*/