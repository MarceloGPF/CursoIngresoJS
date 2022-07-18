/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 03.
*/


function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;


	switch(mesDelAño)
	{

			case "Febrero":

				alert("Este mes no tiene más de 29 días.");

			break

			case "Enero" :
			case "Marzo"	:
			case "Abril" :
			case "Mayo"	:
			case "Junio" :
			case "Julio" :
			case "Agosto" :
			case "Septiembre" :
			case "Octubre" :
			case "Noviembre" :
			case "Diciembre" :

				alert("Este mes tiene 30 o más días.");

			break
			

	}
	
	


}//FIN DE LA FUNCIÓN


//al seleccionar un mes informar.                       https://onlinegdb.com/d4XDeTuVzF
//si es Febrero: " Este mes no tiene más de 29 días."
//si NO es Febrero: "Este mes tiene 30 o más días"