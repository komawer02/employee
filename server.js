const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://root:042602@cluster0.eatnaco.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    
    if(err) return console.log(err);
    db = client.db('todoapp');
    
    app.listen(8080, function(req, res){    
        console.log('listening on 8080');
    
    });
})


app.get('/join', function(req, res){
    res.sendFile(__dirname + "/join.html");
})
app.get('/manage', function(req, res){
    res.sendFile(__dirname + "/join.html");
})
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})
