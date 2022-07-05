/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 07.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;// declaro la variable numeroUno

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroUno.
	*/ 


	let numeroDos;// declaro la variable numeroDos
	
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroDos.
	*/ 
		

	let resultado = numeroUno + numeroDos;
	/*declaro la variable resultado y le asigno como valor
	la suma de las variables numeroUno y numeroDos*/ 


	alert("El resultado de la suma es" + " " + resultado);
	/*uso la función alert para mostrar el srting "El resultado de la suma es", 
	lo concateno con un espacio en blanco " " y con el valor
	de la variable resultado*/	
}

function restar()
{
	let numeroUno;// declaro la variable numeroUno

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroUno.
	*/ 


	let numeroDos;// declaro la variable numeroDos
	
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroDos.
	*/ 
		

	let resultado = numeroUno - numeroDos;
	/*declaro la variable resultado y le asigno como valor
	la suma de las variables numeroUno y numeroDos*/ 


	alert("El resultado de la resta es" + " " + resultado);
	/*uso la función alert para mostrar el srting "El resultado de la resta es", 
	lo concateno con un espacio en blanco " " y con el valor
	de la variable resultado*/
}

function multiplicar()
{ 
	let numeroUno;// declaro la variable numeroUno

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroUno.
	*/ 


	let numeroDos;// declaro la variable numeroDos
	
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroDos.
	*/ 
		

	let resultado = numeroUno * numeroDos;
	/*declaro la variable resultado y le asigno como valor
	la suma de las variables numeroUno y numeroDos*/ 


	alert("El resultado de la multiplicación es" + " " + resultado);
	/*uso la función alert para mostrar el srting "El resultado de la multiplicación es", 
	lo concateno con un espacio en blanco " " y con el valor
	de la variable resultado*/
}

function dividir()
{
	let numeroUno;// declaro la variable numeroUno

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroUno.
	*/ 


	let numeroDos;// declaro la variable numeroDos
	
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	/*tomo el valor obtenido por el ID y lo paso a valor numérico luego
	con la función parseInt y le asigno ese valor numérico
	 a la variable numeroDos.
	*/ 
		

	let resultado = numeroUno / numeroDos;
	/*declaro la variable resultado y le asigno como valor
	la suma de las variables numeroUno y numeroDos*/ 


	alert("El resultado de la división es" + " " + resultado);
	/*uso la función alert para mostrar el srting "El resultado de la división es", 
	lo concateno con un espacio en blanco " " y con el valor
	de la variable resultado*/
}

//https://onlinegdb.com/XJDlNDlK4