/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-06.
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if (edad >= 18){
		
		alert("Es mayor de edad.");
	}

	if (edad >= 13 && edad <= 17){
		
		alert("Es adolescente.");
	}

	if (edad < 13){
		
		alert("Es niño.");
	}



}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/wYxyQ6gQZ