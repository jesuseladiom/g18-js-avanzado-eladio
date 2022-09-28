console.log('------------BLOQUE 4: PROMISES -----------------');
const validPaymentPromise= () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('2- Validando la tarjeta');
            const statArray= [200,500];
            const randomResponse= statArray[Math.floor(Math.random()*statArray.length)];
            console.log(randomResponse);
            if (randomResponse===200)
                resolve('Ok');
            else
                reject('mal');   //error 500
        }, 0);
    });
 }

 console.log('1- presiona el boton de comprar');
 validPaymentPromise().then(response => {
    console.log(response);
    console.log('3- ver el mensaje de gracias Joven');
})
.then(()=>{
    console.log('4- ver el mensaje de gracias Joven');
})
.then(()=>{
    console.log('5- ver el mensaje de gracias Joven');
})
.catch((error)=>{
    console.log('ERROR: ' + error);
})
.finally(()=>{
    console.log('-------FINAL----------');
})

