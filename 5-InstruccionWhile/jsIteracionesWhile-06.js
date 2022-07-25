/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio WHILE 06.
 Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promptIngreso;

	let promedio;

	contador = 0;
	acumulador = 0;
	promptIngreso = 0;


		
	

	while(contador < 5)
	{
		
		promptIngreso = prompt("ingrese otro numero ");
		
		promptIngreso = parseInt(promptIngreso);
		
		acumulador = acumulador + promptIngreso;
		//promptIngreso = promptIngreso + 1;
		contador = contador + 1;
	}
	
	
	
		if(contador > 0)
		{

			promedio = acumulador / contador;

		}


	
	
	
	
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN
/*


*/



