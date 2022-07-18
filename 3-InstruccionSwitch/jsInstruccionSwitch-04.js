
/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 04.
*/
	

function mostrar(){

	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{

		case "Enero" :
		case "Diciembre" :
		case "Marzo"	:
		case "Mayo"	:
		case "Octubre" :
		case "Julio" :
		case "Agosto" :

			alert("tiene 31 días.");

		break	

		case "Febrero" :

			alert("tiene 28 días.");

		break

		case "Abril" :
		case "Junio" :
		case "Septiembre" :
		case "Noviembre" :

			alert("tiene 30 días.");

		break	
		
	}	
		
}//FIN DE LA FUNCIÓN

// https://onlinegdb.com/d4XDeTuVzF

/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/