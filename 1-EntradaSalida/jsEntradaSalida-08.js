/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 08.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;// declaro la variable numeroUno

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;
	/*obtengo el valor obtenido con document.getElementById("").value
		y se lo asigno a la variable numeroUno.
	*/ 

	numeroUno = parseInt(numeroUno);
	/*
		paso a número el valor de la variable con la función parseInt
		y se lo asigno a la variable numeroUno.
	*/ 


	let numeroDos;// declaro la variable numeroDos
	
	numeroDos = document.getElementById("txtIdNumeroDivisor").value;
	/*obtengo el valor obtenido con document.getElementById("").value
		y se lo asigno a la variable numeroDos.
	*/ 

	numeroDos = parseInt(numeroDos);
	/*paso a número el valor de la variable con la función parseInt
		y se lo asigno a la variable numeroDos.
	*/ 
		

	let resultado = numeroUno % numeroDos;
	/*declaro la variable y le asigno el valor del resultado  
		del resto de la división entre el valor de las variables
	 	numeroUno y numeroDos */ 


	alert("El resultado del resto es" + " " + resultado);
	/*muestro el resultado con el literal "El resultado del resto es"
	 concatenado con un espacio en blanco " " y el valor asignado
	  a la variable resultado usando la función alert*/
}

//https://onlinegdb.com/p19wVONKx