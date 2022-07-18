/*
Alumno: Marcelo Gastón Pérez Foche.
TP ferrete iluminación.
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
    let calculoTotal;
    
    
    let marca;
    let descuento;

    
    let resultado;
    let mensaje;
    let aPagar;
    const IMPUESTO = 0.10;
    let porcentajeImpuestoSobreTotalConDescuento;
    let totalConImpuesto; 
    let mensajeImpuesto;
   
    

    descuento = 0;
    
    lampara = 35;
    
    marca = document.getElementById("Marca").value;
    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    calculoTotal = cantidadDeLamparas * lampara;
    
    
    
        
    if(cantidadDeLamparas >= 6 && cantidadDeLamparas != 5){                   // A

        descuento = 0.50;
        
    }else{

        if(cantidadDeLamparas == 5 && marca == "ArgentinaLuz"){          //B
    
            descuento = 0.40;
               
            
        }else{

            if(marca != "ArgentinaLuz" && cantidadDeLamparas >= 4 && cantidadDeLamparas != 3){          

                descuento = 0.30;

            }else{ 

                if(cantidadDeLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas" && cantidadDeLamparas != 3){           //C

                        descuento = 0.25;

                }else{

                        if(marca != "ArgentinaLuz" && marca != "FelipeLamparas" && cantidadDeLamparas == 4){

                            descuento = 0.20;

                        }else{

                            if(cantidadDeLamparas == 3 && marca == "ArgentinaLuz"){                   //D
                                                                                                                                             
                                    descuento = 0.15;
                            }else{

                                if(marca == "FelipeLamparas"){

                                    descuento = 0.10;

                                }else{

                                    if(marca != "ArgentinaLuz" && marca != "FelipeLamparas"){

                                        descuento = 0.10;

                                    }

                                }

                            }

                        }

                }

            }
        }        
        
    }

    

    
    
    resultado = calculoTotal * descuento;
    
    aPagar =  calculoTotal - resultado;


    if(aPagar >= 120){

        porcentajeImpuestoSobreTotalConDescuento = aPagar * IMPUESTO; 

        totalConImpuesto =  aPagar + porcentajeImpuestoSobreTotalConDescuento;

        mensajeImpuesto = "Usted pago " + ( porcentajeImpuestoSobreTotalConDescuento * 100 ) +  " de IIBB";

        alert(mensajeImpuesto);

        
    }
    
    mensaje = "Usted tiene un descuento de " + (descuento * 100) + " %";
    
    alert(mensaje);
    
    document.getElementById("txtIdprecioDescuento").value = aPagar;
    
    
    
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
    //       ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.    
}

    
    
    
    

// ----B

//https://onlinegdb.com/FxFBHy_Hs ---- A


/*https://onlinegdb.com/yza085P8i
    ejercicio hecho en clase
*/

