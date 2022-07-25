/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio WHILE 04.
*/
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
	while(numeroIngresado < 0 || numeroIngresado > 10)
	{
		
		numeroIngresado = prompt("re ingrese un número entre 0 y 10.");
			

	}

	

		alert("El número ingresado es " + numeroIngresado)	

	
}//FIN DE LA FUNCIÓN
/*


https://onlinegdb.com/f47KTNgkA
*/
/*



*/