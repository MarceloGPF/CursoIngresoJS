/*
Alumno: Marcelo Gastón Pérez Foche.
TP ferrete iluminación: A
*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let lampara;
 	let cantidadDeLamparas;
    
    

    let marca;
    let descuento;
    
    let calculoTotal;
    let resultado;
    let aPagar;
    
    descuento = 0;
    
    lampara = 35;
    
    marca = document.getElementById("Marca").value;
    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    calculoTotal = cantidadDeLamparas * lampara;
    
    
    /*
    // A
    
    if(cantidadDeLamparas >= 6){
        
        descuento = 0.50;

    }*/

    // B




    if(cantidadDeLamparas >= 5 && marca == "ArgentinaLuz"){

        descuento = 0.40;
           
    }else{

        descuento 

    }


        
        resultado = calculoTotal * descuento;
        
        aPagar =  calculoTotal - resultado;
        
        
        document.getElementById("txtIdprecioDescuento").value = aPagar;
        
        
        
    }
    
    
    
    
    
}
// ----B

//https://onlinegdb.com/FxFBHy_Hs ---- A

