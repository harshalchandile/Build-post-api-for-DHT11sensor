var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userscheme=new Schema({
humidity:Number,temperature:Number
});

var user=mongoose.model('dht11',userscheme,"sensorData");
module.exports=user;
