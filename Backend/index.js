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
const Products = require('./DB/Products');

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

app.get('/product', async(req,resp)=>{
    let products=await Product.find();
    
    if(products.length>0){
        resp.send(products);
    }else{
        resp.send({result:'prod not found'});
    }
})


app.delete('/product/:id',async(req,resp)=>{
    

    const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
    
})

app.get('/product/:id',async(req,resp)=>{
    let result =await Product.findOne({_id:req.params.id});
   
    if(result){
        resp.send(result);
    }
})

app.put('/product/:id', async(req,resp)=>{
    let result = await Product.updateOne(
    
        {_id:req.params.id},
        {
            $set: req.body
        }
    )
    
    resp.send(result)

});

app.get('/search/:key', async(req,resp)=>{
    let result= await Product.find({

   '$or': [
        {name: {$regex: req.params.key}},
        {price: {$regex:req.params.key}},
        {category:{$regex: req.params.key}},
        {company: {$regex: req.params.key}}
   ]   
  
  })
   resp.send(result);
})

app.listen(3001,()=>{
    console.log("Api Work Successfully");
});