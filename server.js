var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose=require('mongoose');
var user = require('./user');
mongoose.connect('mongodb://localhost:27017/sensor_db');

app.use("/templates", express.static(__dirname + '/templates'));

app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.listen(3000,function(){
  console.log('server listening');
});
  
app.get('/', function(req, res){
  res.sendFile(__dirname + '/templates/index.html');
});
  
app.post('/dst11',function(req,res){

    var data = {}

    data.humidity = req.body.humidity
    data.temperature = req.body.temperature

    var newObj=new user();
    newObj.temperature =  req.body.temperature
    newObj.humidity = req.body.humidity
    newObj.save(function(err){});
    res.send(JSON.stringify({data}, null, 3));
    console.log(data.humidity, data.temperature )
})

app.get('/sensor-data',function(request, response) {
    userOne = new Object();
    user.find({}, function(err, users) {
        userOne = users;
        response.json(userOne);
    });  
});
