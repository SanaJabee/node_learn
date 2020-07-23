// core modules not available globally
//http , https , fs, path, os
//Import global module http
const http = require('http');

// function rqListener(req, res){

// }

// http.createServer(function(req,res){


// });

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);