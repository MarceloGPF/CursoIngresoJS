/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-10.
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let min;
	let max;
	let mensaje;

	min = 1;

	max = 10;

	nota = Math.floor(Math.random() * ( max - min ) + min)

	if (nota == 9 || nota == 10 )
	{
		mensaje = "EXCELENTE";

	}else{

		if(nota >= 4 && nota < 9)
		{
			mensaje = "Aprobó";

		}else{

		mensaje = "Vamos que se puede";
		}
	}


		alert(mensaje);
	








}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/j_OPIs9ot