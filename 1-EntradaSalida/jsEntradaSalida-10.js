/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - Ejercicio 10.--------------------- Descuento dinámico por prompt.
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
    let descuento;
    let resultado;

    importe = document.getElementById("txtIdImporte").value;

    importe = parseInt(importe);


    descuento = prompt("Ingrese el porcentaje de descuento deseado:");

    descuento = parseInt(descuento);


    resultado = 100 * importe / descuento;


    resultado = importe - descuento;
    
    
    document.getElementById("txtIdResultado").value = resultado;
    



}

// SIN PROMPT https://onlinegdb.com/SFjCgaH7C 

// CON PROMPT  https://onlinegdb.com/SjATP1t_cR

