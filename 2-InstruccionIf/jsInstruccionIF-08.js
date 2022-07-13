/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-08.
*/
function mostrar()
{
	
	let edad;
	let estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;


	
	if(edad >= 18 && estadoCivil == "Soltero"){

		alert("Es soltero y no es menor.");

	}

	//txtIdEdad	
	//estadoCivil

}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/OsHUTwMf_