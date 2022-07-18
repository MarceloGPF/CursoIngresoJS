/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 05.
*/
	

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia =  parseFloat(horaDelDia);


	switch(horaDelDia)
	{


		case 7:
		case 8:
		case 9:
		case 10:
		case 11:

			alert("Es de mañana.");

		break

		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:

			alert("No es de mañana.");

		break
	


	}
	
	



}//FIN DE LA FUNCIÓN


/*

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."

https://onlinegdb.com/d1-r7msdp


*/

/*






*/