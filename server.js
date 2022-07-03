const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://root:ASDun0304@cluster0.eatnaco.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    db = client.db('todoapp');
    db.collection('post').insertOne({key:'저장할데이터'}, function(err, result){

    })



    app.listen(8080, function(req, res){
        console.log('listening on 8080');
    });

})




app.get('/', function(req,res){
    res.sendFile(__dirname +'/index.html');
});
