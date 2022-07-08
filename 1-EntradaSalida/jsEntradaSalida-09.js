/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 09 ------------------------------Ingreso dinámico por prompt.
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
      let sueldo;
	  let IngreseAumento;

	  let resultado;

	  sueldo = document.getElementById("txtIdSueldo").value;

	  sueldo = parseInt(sueldo);

	  IngreseAumento = prompt("Ingrese el porcentaje de aumento deseado:");
      
      IngreseAumento = parseInt(IngreseAumento);


	  resultado = sueldo * IngreseAumento / 100; 
	  

	document.getElementById("txtIdResultado").value = resultado;
}

//https://onlinegdb.com/zYLPmhL_W  SIN PROMPT

// CON PROMPT  https://onlinegdb.com/gXUDDeuDF


