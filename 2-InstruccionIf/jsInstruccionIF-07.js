/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-07.
*/
function mostrar()
{
	
	//tomo edad y estado civil.

	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad <= 18 && estadoCivil != "Soltero" ){
		
		alert("Es muy pequeño para NO ser soltero.");

	};
	
	//txtIdEdad	
	//estadoCivil
	
	
}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/BMHvqY8tX