/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	let numeroIngresado;
	let pregunta;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivo;
	let contadorNegativo;
	let contadorDeCeros;
	let resto;
	let contadorDeNumerosPares;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativo = 0;
	contadorPositivo= 0;
	contadorDeCeros = 0;
	contadorDeNumerosPares = 0;

	pregunta = "si";
	
	while(pregunta == "si"){

		numeroIngresado = prompt("Ingrese un nro");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){

			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativo = contadorNegativo + 1;

		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = numeroIngresado + sumaPositivos;
				contadorPositivo = contadorPositivo + 1;

			}
			else
			{
				contadorDeCeros = contadorDeCeros + 1;
			}
		}
		resto = numeroIngresado % 2;

		if(resto == 0)
		{
			contadorDeNumerosPares = contadorDeNumerosPares + 1;
		}
		
		pregunta = prompt("Desea seguir ingresando nros si/no");
	}



	document.write(contadorPositivo);
	document.write(contadorNegativo);
	document.write(contadorDeCeros);

}	


//https://onlinegdb.com/L6kYQ4tFP
