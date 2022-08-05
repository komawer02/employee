const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

const { Navigator } = require("node-navigator");
const navigator = new Navigator();



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
    navigator.geolocation.getCurrentPosition((success, error) => {
        if (error) console.error(error);
        else console.log(success.latitude, success.longitude);
        if(calcDistance(success.latitude, success.longitude) < 1000){
            console.log('안에있음');
        }
        else    console.log(calcDistance(success.latitude, success.longitude));
    });
})

function getDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2))
        return 0;

    var radLat1 = Math.PI * lat1 / 180;
    var radLat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1)
        dist = 1;

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;

    return dist;
}