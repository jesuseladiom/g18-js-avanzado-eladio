console.log(this); // {} o module.exports
console.log('Ruta donde esta mi archivo: ', __dirname);
console.log('Ruta + nombre de mi archivo: ', __filename);
// module: Referencia al módulo actual.
// exports: Para exportar modulos (archivos).
// require(): Importa modulos (archivo js) como modulo. require('index.js');


//dash o zeal
//fazt youtube node.js
//midudev node.js youtube
//nodejs en w3schools
//tutorialesprogramacionya.com

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});