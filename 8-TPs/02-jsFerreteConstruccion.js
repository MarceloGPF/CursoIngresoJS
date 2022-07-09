/*2.	Para el departamento de Construcción:
Alumno: Marcelo Gastón Pérez Foche.
E/S - TP Ferrete Construcción.
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let tresAlambres;

    largo = document.getElementById("txtIdLargo").value;

    largo = parseFloat(largo);


    ancho = document.getElementById("txtIdAncho").value;

    ancho = parseFloat(ancho);

    perimetro = 2 * ancho + 2 * largo;

    tresAlambres = perimetro * 3;

    
    alert("Debe emplear tres alambres de " + tresAlambres + " metros de largo.");


}
function Circulo () 
{
	let radio;
    let perimetro;
    let tresAlambres;


    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    perimetro = 2 * 3.1416 * radio;

    tresAlambres = perimetro * 3;

    alert("Debe emplear tres alambres de " + tresAlambres + " metros de largo.");



}
/*
    Entrada: medidas de largo y ancho.
    Proceso: determinar el área en relación a los datos ingresados por el usuario. 
             realizar una regla de 3 para saber la cantidad de bolsas de cemento y otra para saber la cantidad de bolsas de cal.
    Salida: mostrar la cantidad. 
*/
function Materiales () 
{
    
	let contrapisoUsuarioLargo;
    let contrapisoUsuarioAncho;
    let contrapisoReferenciaCemento;
    let areaReferecia;
    let areaUsuario;
    let contrapisoReferenciaCal;
    let bolsasCementoUsuario;
    let bolsasCalUsuario;
    

    
    
    contrapisoUsuarioLargo = document.getElementById("txtIdLargo").value;
    contrapisoUsuarioLargo = parseFloat(contrapisoUsuarioLargo);
    
    
    contrapisoUsuarioAncho = document.getElementById("txtIdAncho").value;
    contrapisoUsuarioAncho = parseFloat(contrapisoUsuarioAncho);
    
    
    areaReferecia = 1;
    contrapisoReferenciaCemento = 2;
    contrapisoReferenciaCal = 3;  



    areaUsuario = contrapisoUsuarioAncho * contrapisoUsuarioLargo;

    bolsasCalUsuario = areaUsuario * contrapisoReferenciaCal / areaReferecia;

    bolsasCementoUsuario = areaUsuario * contrapisoReferenciaCemento / areaReferecia;

     

    alert("para las medidas ingresadas empleará " + bolsasCalUsuario + " bolsas de cal y " + bolsasCementoUsuario + " bolsas de cemento");






}

//https://onlinegdb.com/PkcDXitdb