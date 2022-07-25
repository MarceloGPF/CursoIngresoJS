/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio WHILE 05.
*/
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado !=  "f" && sexoIngresado != "m")
	{
		
		sexoIngresado = prompt("ingrese sólo las letras f ó m .");

	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN

/*

https://onlinegdb.com/l7-b4Uj_O

*/
/*



*/