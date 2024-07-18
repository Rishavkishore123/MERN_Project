const express= require('express');
const cors= require('cors');
const app= express();
require('./DB/config');
const path=require('path');

app.use(express.json())
app.use(cors());
const User=require('./DB/User');

const Info=require('./DB/info');

const Product=require('./DB/Products');

app.post('/signup',async (req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);
})

app.post('/login',async (req,resp)=>{

    if(req.body.email && req.body.password){
        let user= await User.findOne(req.body).select('-password');
        if(user){
            resp.send(user)
        }else{
            resp.send({result:"not found"})
        }
    }else{
        resp.send({result:"user not found"})
    }         
})

app.use('/images', express.static(path.join(__dirname, "/uploads")))

app.get('/info',(req,resp)=>{
    Info.find()
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err));
   
})

app.post('/addproducts',async (req,resp)=>{
    let product=new Product(req.body);
    let result= await product.save();

    resp.send(result);
    
})

app.listen(3001,()=>{
    console.log("Api Work Successfully");
});