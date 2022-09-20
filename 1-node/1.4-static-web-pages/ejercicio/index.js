const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    
    const urlObject = url.parse(request.url);
    const { path } = urlObject; // destructuring
    let fileSystemPath = '';
    let status=0;
    let mymeType = { 'Content-type': 'text/plain' };7
    let jsonResp;

    arreglo= {};
    switch(path) {
        case '/':
            status = 200; // ok
            mymeType = { 'Content-type': 'application/json' };
            response.writeHead(status, mymeType);
            jsonResp= { message: 'hola desde el index'};
            response.write(JSON.stringify(jsonResp));
            response.end();
            break;
        case '/patitos':
            status = 200; // ok
            mymeType = { 'Content-type': 'application/json' };
            response.writeHead(status, mymeType);
            jsonResp= { data: [{name: 'donald'},{name:'lucas'}]};
            response.write(JSON.stringify(jsonResp));
            response.end();
            break;
        case '/admin':
            status = 401; // No autorizado
            response.writeHead(status, mymeType);
            response.write('No Autorizado');
            response.end();
            break;
        default:
            status = 404; // Not found
            response.writeHead(status, mymeType);
            response.write('No encontrado');
            response.end();
    }

});

server.listen(8080);
console.log('servidor ejecutandose...');
