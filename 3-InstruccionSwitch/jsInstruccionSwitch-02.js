/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 02.
*/


function mostrar()
{
	//tomo el mes
	
	


	var mesDelAño =txtIdMes.value;


	switch(mesDelAño)
	{
		
			
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":	
		case "Agosto":

			alert("Abrigate que hace frio.");

		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			
			alert("Ya pasamos el frio, ahora calor!!!.");

		break;							
		
		case "Diciembre":
		case "Enero":
		case "Febrero":

			alert("Falta para el invierno.");

		break;

		default:

			alert("No ingreso ningun mes con mensaje");

		break;
}									





}//FIN DE LA FUNCIÓN
// https://onlinegdb.com/TgypHW8AW
/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/ 