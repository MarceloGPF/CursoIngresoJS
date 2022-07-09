/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - TP Ferrete Pinturerias.
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//Entrada: temperatura en grados Farenheit.
//Preceso: convertir grados Farenheit a Centígrados.
//Salida:  mostrar el resultado por medio del alert. 

function FahrenheitCentigrados () 
{
	let temperatura;
    let fahrenheit;
    let convertir;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    fahrenheit = 32.

    convertir = (temperatura - fahrenheit) * 5 / 9;

    alert(convertir + " grados Centigrados");

}


//Entrada: temperatura en grados Centígrados.
//Preceso: convertir grados Centígrados a Farenheit.
//Salida:  mostrar el resultado por medio del alert.
function CentigradosFahrenheit () 
{
	let temperatura;
    let convertir;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    convertir = (temperatura * 9 / 5) + 32;

    alert(convertir + " grados Farenheit");
}
// txtIdTemperatura
// https://onlinegdb.com/ykTcXRCDv
//
//