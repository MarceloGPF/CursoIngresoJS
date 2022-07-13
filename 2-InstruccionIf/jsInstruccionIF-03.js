/*
Alumno: Marcelo Gastón Pérez Foche.
InstrucciónIF-03.
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
		


	if(edad <= 18){

		alert("Es menor de edad.");
	}		

}//FIN DE LA FUNCIÓN
//https://onlinegdb.com/Etd28apXc