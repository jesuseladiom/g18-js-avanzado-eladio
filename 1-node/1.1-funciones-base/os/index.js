const modulo = require('os');

console.log('Version detalla del sistema: ', modulo.version());
console.log('Nombre de la versión del sistema: ', modulo.platform());
console.log('Numero de la versión del sistema:' + modulo.release());

console.log('Arquitectura: ', modulo.arch()); 
console.log('Número de procesadores lógicos:' + modulo.cpus().length);
console.log('Información acerca de los cpus: ', modulo.cpus());
console.log('Memoria libre en bytes', modulo.freemem()); 
console.log('Carpeta del usuario actual: ', modulo.homedir()); 
console.log('Mi direccion ip o mi hostname (local): ', modulo.hostname()); 

