/*
Alumno: Marcelo Gastón Pérez Foche.
E/S - TP Ferrete Facturación.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioProdA;
    let precioProdB;
    let precioProdC;
    let sumaProd;


    precioProdA = document.getElementById("txtIdPrecioUno").value;

    precioProdA = parseInt(precioProdA);


    precioProdB = document.getElementById("txtIdPrecioDos").value;

    precioProdB = parseInt(precioProdB);


    precioProdC = document.getElementById("txtIdPrecioTres").value;

    precioProdC = parseInt(precioProdC);


    sumaProd = precioProdA + precioProdB + precioProdC;


    alert("El resultado de la suma de los precios ingresados es: " + sumaProd + " pesos.");



}
function Promedio () 
{
    let precioProdA;
    let precioProdB;
    let precioProdC;
    let promedio;


    precioProdA = document.getElementById("txtIdPrecioUno").value;

    precioProdA = parseFloat(precioProdA);


    precioProdB = document.getElementById("txtIdPrecioDos").value;

    precioProdB = parseFloat(precioProdB);


    precioProdC = document.getElementById("txtIdPrecioTres").value;

    precioProdC = parseFloat(precioProdC);


    promedio = (precioProdA + precioProdB + precioProdC)/3;


    alert("El resultado del promedio de los precios ingresados es: " + promedio + " pesos.");
}
function PrecioFinal () 
{
    let precioProdA;
    let precioProdB;
    let precioProdC;
    let sumaProd;
    let masIva;
    let el21;


    precioProdA = document.getElementById("txtIdPrecioUno").value;

    precioProdA = parseFloat(precioProdA);


    precioProdB = document.getElementById("txtIdPrecioDos").value;

    precioProdB = parseFloat(precioProdB);


    precioProdC = document.getElementById("txtIdPrecioTres").value;

    precioProdC = parseFloat(precioProdC);


    sumaProd = precioProdA + precioProdB + precioProdC;



    el21 = sumaProd * 21 / 100;

    masIva = sumaProd + el21;


    alert("El precio final más el 21% de IVA es: " + masIva + " pesos.");
}

// https://onlinegdb.com/bp2UD-LEL