/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 01 Sábado.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

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

//Ejercicio Cometa Sábado

