/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 01.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

		switch(mesDelAño)
		{
			case "Enero":
			alert("que comiences bien el año!!!.");
		break;
		case "Marzo":
			alert("a clases!!!.");
		break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
		break;
		case "Diciembre":
			alert("Felices fiestas!!!.");
		break;
		default:
			alert("No ingreso ningun mes con mensaje");
		break;
		}

}//FIN DE LA FUNCIÓN


/*explicación SWITCH : /*      usar con numeros enteros // letras // palabras ------- no usar con puntos flotantes 
https://onlinegdb.com/GLBjwDvA1
function mostrar()
{
	var letra;
	letra = prompt("Ingrese una letra");

	switch(letra)
	{
		case "a":
			alert("Ingreso una a");
		break;
		case "e":
			alert("Ingreso una e");
		break;
		case "i":
			alert("Ingreso una i");
		break;
		case "o":
			alert("Ingreso una o");
		break;
		case "u":
			alert("Ingreso una u");
		break;
		default:
			alert("No ingreso ninguna vocal");
		break;
	}*/