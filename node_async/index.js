//var fs = require('fs');
//const welcome = require('./welcome_function/welcome.js');
const http = require('http');
const fs = require('fs');

var PORT = 3000;


const server = http.createServer((req, res) => {
    
    //decision making logic
    if(req.url == "/about" && req.method == "GET"){
        //tell the browser status code of 200 and the file type
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("about.html", function(err, data){
            res.write(data)
            res.end();
        });
    }else if(req.url == "/contact" && req.method == "GET"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("contact.html", function(err, data){
            res.write(data)
            res.end();
        });
    }else if(req.url == "/" && req.method == "GET"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("home.html", function(err, data){
            res.write(data)
            res.end();
        });
    }else if(req.url == "/json_api" && req.method == "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        fs.readFile("./model/datastore.json", function(err, data){
            res.write(data)
            res.end();
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>404 page</h2>");
        res.end();
    }
}).listen(PORT);

//welcome.welcome();

//welcome.conclude();