/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 09.
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;// declaro la variable sueldo.

	sueldo = document.getElementById("txtIdSueldo").value;
	/*
		obtengo el valor obtenido con document.getElementById("").value
		y se lo asigno a la variable sueldo.
	*/ 

	sueldo = parseInt(sueldo);
	/*
		paso a número el valor de la variable con la función parseInt
		y se lo asigno a la variable sueldo.
	*/ 


	let RESULTADO;// declaro la variable RESULTADO
	
	RESULTADO = sueldo * 0.10;
	/*
		tomo el valor del sueldo que ingresó el usuario y lo multiplico por 0.10 para obtener el 
		10% del sueldo ingresado por el usuario finalmente asigno ese valor a la variable RESULTADO. 
	*/ 


	let resultadoMasPorcentaje;// declaro la variable resultadoMasPorcentaje. 

	resultadoMasPorcentaje = RESULTADO + sueldo;
	/*
		tomo el valor del 10 porciento del sueldo, lo sumo al sueldo original y
		asigno el valor obtenido a la variable resultadoMasPorcentaje. 
	*/ 


	document.getElementById("txtIdResultado").value = resultadoMasPorcentaje;
	/*muestro el valor asignado a la variable resultadoMasPorcentaje en el cuadro de texto txtIdResultado*/
}

//https://onlinegdb.com/zYLPmhL_W