console.log('------------BLOQUE 5: async await -----------------');

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


async function main(){
    console.log('1- presiona el boton de comprar');
    try{
        await validPaymentPromise();
        console.log('3- ver el mensaje de gracias Joven');
        console.log('4- ver el mensaje de gracias Joven');
        }
    catch (error){
        console.log('ERROR: ' + error);
    }
    console.log('-------FINAL----------');
}

main()
