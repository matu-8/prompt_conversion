let opciones,menu, pesos;
const precioUSD = 1300;
let history = []
//     tipo : divisa,
//     entrada = '1300 ARG',
//     salida= '1 USD',
//     fecha = new date().ToLocaleString()
// function convertCurrency (pesos){
//     return precioUSD*pesos;
// }
function convertCurrency(pesos){
 return pesos/precioUSD;
}
do {
opciones = prompt ('¿Desea realizar una conversion? \n 1)Si \n 2)No');
switch (opciones){
   case '1': 
    pesos = prompt('Ingrese cantidad en pesos');
    alert('El momnto ingresado es de '+ convertCurrency(pesos).toFixed(2)+ 'USD');
}
}
while(opciones!='2');
