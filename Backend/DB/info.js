const mongoose= require('mongoose');

const InfoSchema= new mongoose.Schema({
    name: String,
    email: String,
    pursuing:String,
    img:String,
    age:String
});

module.exports=mongoose.model("information",InfoSchema);