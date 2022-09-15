const fs= require('fs');
const path= './';
const filename= 'my-file.txt';
const contentFile= 'Queremos ir al receso';
const destination= `${path}${filename}`;

fs.writeFile(destination, contentFile, (err) => {
    if (err) throw err;
    console.log('Archivo creado con exito');
})