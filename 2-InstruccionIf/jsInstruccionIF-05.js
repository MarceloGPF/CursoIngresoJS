/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-05.
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if (!(edad >= 13 && edad <= 17)){
		
		alert("No es adolescente.");
	}
		


}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/Jyjm1lZA7