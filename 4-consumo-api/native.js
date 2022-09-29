var https = require('follow-redirects').https
var fs = require('fs')

var options={
    'method': 'GET',
    'hostname': 'rickandmortyapi.com',
    'path': '/api/character/1'
}

var req = https.request(options, function(res){
    var chunks= [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    // res.on("end", function(chunks) {
    //     var body = Buffer.concat(chunks);
    //     console.log(body.toString())
    // });

     res.on("end", () => {
         var body = Buffer.concat(chunks);
         console.log(body.toString())
     });

    res.on("error", function(error) {
        console.log(error)
    });

});

req.end()
