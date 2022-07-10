/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 06.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*let numeroUno;// declaro la variable numeroUno

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroUno.
	*/ 


	//let numeroDos;// declaro la variable numeroDos
	
	//numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroDos.
	*/ 
		

	//let resultado = numeroUno + numeroDos;
	/*declaro la variable resultado y le asigno como valor
	la suma de las variables numeroUno y numeroDos*/ 


	//alert("La suma es" + " " + resultado);
	/*uso la función alert para mostrar el srting "La suma es", 
	lo concateno con un espacio en blanco " " y con el valor
	de la variable resultado*/

	let dolarOficial;
	let dolarBlue;
	let valorAbsoluto;
	
	let valorDecimal;
	let valorFinalPorcentaje;
	let mensaje;
	
	
	
	//dolarOficial = prompt("ingrese el valor del Dólar oficial.") 
	//dolarOficial = parseFloat(dolarOficial);
	dolarOficial = document.getElementById("txtIdNumeroUno").value;
	dolarOficial = parseFloat(dolarOficial);

	
	//dolarBlue = prompt("ingrese el valor del Dólar blue.")
	//dolarBlue = parseFloat(dolarBlue);
	dolarBlue = document.getElementById("txtIdNumeroDos").value;
	dolarBlue = parseFloat(dolarBlue);

	valorAbsoluto = dolarBlue - dolarOficial;

	valorDecimal = valorAbsoluto / dolarOficial;

	valorFinalPorcentaje = valorDecimal * 100; 

	
	mensaje = "La diferencia en porcentaje entre el dólar oficial y el dólar blue es "+ valorFinalPorcentaje + " %";

	alert(mensaje);
}

//https://onlinegdb.com/HHGQ9FOLa

//Sabado diferencia entre porcentajes desde números enteros: https://onlinegdb.com/azqE0IZO_

