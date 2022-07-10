/*
Alumno: Marcelo Gastón Pérez Foche. División J
E/S - Ejercicio 02 TP Sábado 09/Julio/2022 
Al presionar el  botón*/
function mostrar()
{

	let diametroMenor;
	let diametroMayor;
	let ladosMenores; 
	let ladosMayores;
	let ladoMayorDosTerciosVarillaLarga;
	let calculoHipotenusaLadosMenoresBc;
	let raizBc;
	let calculoHipotenusaLadosMayoresCa;
	let raizCa;
	let sumaDeVarillasUsuario;
	let perimetroBarrileteBcCaPorDos;
	let perimetroBarrilete;
	let areaBarrilete;
	let porcentajeAumento;
	let aumentoDiezArea;	
	let centimetrosHaciaMetrosPerimetro;
	let centimetrosHaciaMetrosArea;
	let perimertoPorDiezUnidades;
	let areaPorDiezUnidades;
	let cantidadBiColor;
	let mensaje;
	let mensajeBicolor;

	
	diametroMayor = prompt("Ingrese la cantidad de centímetros (Cms) que requiere para la varilla vertical y central de su cometa:");
	diametroMayor = parseFloat(diametroMayor);
	
	
	diametroMenor = prompt("Ingrese la cantidad de centímetros (Cms) que requiere para la varilla horizontal y central de su cometa:");
	diametroMenor = parseFloat(diametroMenor);



    //Para calcular el perímetro del barrilete voy a utilizar
	//los datos ingresados por el usuario de la varilla larga y la varilla corta 
	//ya que para saber el largo de cada varilla de los lados periféricos voy a tener que utilizar el Teorema de Pitágoras. 

	ladosMenores = diametroMayor / 3;
	//Divido la vara interna más larga por tres para saber a qué distancia va a cruzar la vara interna corta y 
	//el valor de uno de los lados del triangulo para calcular el perímetro usando el teorema de Pitágoras. 

	ladosMayores = diametroMenor / 2;
	//Divido la vara interna más corta por dos para obtener el valor de uno de los lados del triangulo  
	//para calcular el perímetro usando el teorema de Pitágoras. 

	ladoMayorDosTerciosVarillaLarga = ladosMenores * 2;
	//Multiplico el valor de la variable ladosMenores por 2 para obtener las dos terceras partes de la vara interna larga
    //y así obtener el valor de uno de los lados del triángulo para calcular el perímetro usando el teorema de Pitágoras.




	
	calculoHipotenusaLadosMenoresBc = Math.pow(ladosMenores, 2) + Math.pow(ladosMayores, 2);
	//Usando el método Math.pow elevo a potencia dos el valor de las variables ladosMenores y 
	//ladosMayores para luego sumarlos y resolver el primer paso del teorema.
	//Para esto me documenté utilizando la página web https://www.w3schools.com/jsref/jsref_pow.asp

	raizBc = Math.sqrt(calculoHipotenusaLadosMenoresBc);
	//Usando el método Math.sqtr obtengo la raíz del resultado del calculo realizado en el paso previo así obteniendo 
	//el valor de la hipotenusa de uno de los lados menores.
	//Para esto me documenté utilizando la página web https://www.w3schools.com/jsref/jsref_sqrt.asp
	
	
	calculoHipotenusaLadosMayoresCa = Math.pow(ladosMenores, 2) + Math.pow(ladoMayorDosTerciosVarillaLarga, 2);
	//realizo el mismo procedimiento anterior pero ahora utilizando los valores asignados en 
	//las variables ladosMenores (como en el cáclculo para BC) y en el segundo termino el valor de la variable
	//ladoMayorDosTerciosVarillaLarga. 



	raizCa = Math.sqrt(calculoHipotenusaLadosMayoresCa);
	
	
	sumaDeVarillasUsuario = diametroMayor + diametroMenor;
	//genero una variable que contenga el resultado de la suma de los datos pedidos al usuario
	//para después sumarlo a los valores de hipotenusa obtenidos y así obtener el total, en Cm, de las varillas.
	

	perimetroBarrileteBcCaPorDos = (raizBc + raizCa) * 2;
	//obtengo el subtotal de las varillas periféricas


	perimetroBarrilete = perimetroBarrileteBcCaPorDos + sumaDeVarillasUsuario; 
	//obtengo el total en Cm de varilla que requerirá el usuario para contruir UN barrilete.


	
	
	
	
	
	
	
	
	areaBarrilete = (diametroMayor * diametroMenor) / 2;
	//realizo el cálculo para obtener el valor del área total del barrilete. 

	porcentajeAumento = (10 / 100) * areaBarrilete;
	//Una de las variables que generé para en cálculo del aumento de porcentaje sobre el total del área del barrilete
	//me devolvía por el inspector Chrome y por el alert "NaN" por lo que reformulé el cálculo para lograr
	//que me reconociera la variable como número.

	aumentoDiezArea = porcentajeAumento + areaBarrilete;
	//aumento un 10% sobre el área total.

	centimetrosHaciaMetrosPerimetro = perimetroBarrilete / 100;
	//hago el pasaje de unidades de centímetros a metros del perimetro.

	centimetrosHaciaMetrosArea = aumentoDiezArea / 100;
	////hago el pasaje de unidades de centímetros a metros del área con el aumento del 10% ya incorporado.

	perimertoPorDiezUnidades = centimetrosHaciaMetrosPerimetro * 10;
	//multiplico por 10 el valor de centimetrosHaciaMetrosPerimetro.

	areaPorDiezUnidades = centimetrosHaciaMetrosArea * 10;
	//multiplico por 10 el valor de centimetrosHaciaMetrosArea.

	mensaje = "Usted requerirá " + perimertoPorDiezUnidades.toFixed(2) + " Mts de varilla y " + areaPorDiezUnidades + " Mts de papel para construir 10 barriletes."  
	//con el propósito de limitar la cantidad de decimales mostradas por la variable perimertoPorDiezUnidades usé el método .toFixed()
	//para esto me documenté en la página https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
	
	
	cantidadBiColor = areaPorDiezUnidades / 2;
	//tomo el valor del área total requerida de papel para construir 10 barriletes y lo divido por 2 
	//para saber cuanto papel de cada color será empleado en la construcción.
	
	
	mensajeBicolor = "Usted requerirá " + cantidadBiColor + " Mts de cada color de papel para construir 10 barriletes.";

	alert(mensaje);
	alert(mensajeBicolor);


}


//https://onlinegdb.com/xtLaXI4ux