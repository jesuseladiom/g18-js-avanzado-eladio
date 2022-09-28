console.log('------------BLOQUE 3 -----------------');
const showSucess = () => {
    console.log('3- ver el mensaje de gracias Joven');
}

const validPayment= (param) => {
   setTimeout(() => {
       console.log('2- Validando la tarjeta');
       param();
   }, 0);
}

console.log('1- presiona el boton de comprar'); 
validPayment(showSucess);
