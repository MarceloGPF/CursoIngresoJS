/*
Alumno: Marcelo Gastón Pérez Foche.
 Ejercicio SWITCH 09.
*/

function mostrar()
{
	let destino;
	const ESTADIA = 15000;
	let mensaje;
	let mensajeAumento;
	let mensajeDescuento;
	let porcentajeAumento;
	let porcentajeDescuento;
	let descuento;
	let aumento;
	
	

	descuento = 0;
	aumento = 0;


	destino = document.getElementById("txtIdDestino").value;
	let estacionIngresada =txtIdEstacion.value;

	
	
	switch(estacionIngresada)
	{
		
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 0.20;
					break
					
					case "Mar del plata":
						descuento = 0.20;
				break
				
				case "Cordoba":
				case "Cataratas":

						descuento = 0.10;
				break
						
						//en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%				
						
					}	
		break
		
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 0.20;
					break
					
					case "Mar del plata":
					aumento = 0.20;
					break
					
					case "Cordoba":
				case "Cataratas":

					aumento = 0.10;
					
					break
					
//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%				

}
break

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":

					aumento = 0.10;
					
				break

				case "Cordoba":
					descuento 
				break
				
//en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
//y Cordoba tiene el precio sin descuento				
			}
		break

		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
					case "Cataratas":
				case "Mar del plata":

					aumento = 0.10;

				break

				case "Cordoba":
					descuento 
				break
				
				
			}	
	break
	

	}

	porcentajeAumento = ESTADIA * aumento / 100;

	porcentajeDescuento = ESTADIA * aumento / 100;


	precioFinalAumento = ESTADIA + porcentajeAumento; 

	precioFinalDescuento = ESTADIA - porcentajeDescuento;

	
	mensajeAumento = "El precio final es " + precioFinalAumento + " con un aumento de " + porcentajeAumento + " %.";

	mensajeDescuento = "El precio final es " + precioFinalDescuento + " con un descuento de " + porcentajeDescuento + " %.";

	if(mensajeAumento == "El precio final es " + precioFinalAumento + " con un aumento de " + porcentajeAumento + " %.")
	{

		alert(mensajeAumento);

	}
	else
	{

		alert(mensajeDescuento);

	}





}//FIN DE LA FUNCIÓN

/*

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
 y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA


	case "Verano":
	case "Primavera":
	case "Otoño":

https://onlinegdb.com/vYzMzT4Ky

https://onlinegdb.com/7Cgedk6zu

*/