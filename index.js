const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

const { Navigator } = require("node-navigator");
const navigator = new Navigator();
const port = process.env.PORT;


MongoClient.connect('mongodb+srv://root:042602@cluster0.eatnaco.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    
    if(err) return console.log(err);
    db = client.db('todoapp');
    
    app.listen(port, function(req, res){    
        console.log('listening on ' + port);
    
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
        else    console.log(calcDistance(success.latitude, success.longitude,37.03449586752981,127.05197172911399));
    });
})

function calcDistance(lat1, lon1, lat2, lon2){
    var theta = lon1 - lon2;
    dist = Math.sin(deg2rad(lat1))*Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return (Number(dist*1000).toFixed(2))/4;

}
function deg2rad(deg){
    return (deg*Math.PI/180);

}
function rad2deg(rad){
    return (rad*180/Math.PI);
}
