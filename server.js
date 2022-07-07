const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

MongoClient.connect('mongodb+srv://root:042602@cluster0.eatnaco.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    db = client.db('todoapp');
    app.post('/access', function(req,res){
        res.send('저장완료');
        db.collection('post').insertOne({name:req.body.name, date:req.body.date}, function(err, result){
            
        })
    })




    app.listen(8080, function(req, res){
        console.log('listening on 8080');
    });

})




app.get('/', function(req,res){
    res.sendFile(__dirname +'/index.html');
});

