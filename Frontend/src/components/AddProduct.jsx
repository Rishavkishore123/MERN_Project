import React, { useState } from 'react'

const AddProduct = () => {

  const [name, setName]=useState('');
  const [price, setPrice]=useState('');
  const [category, setCategory]= useState('');
  const [company, setCompany]=useState('');
  const [error, setError]= useState(false)
  const [success, setSuccess]=useState(false);

  const addingProduct=async ()=>{

    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }

    const userID=JSON.parse(localStorage.getItem("user"))._id;
    let result= await fetch('http://localhost:3001/addproducts',{
      method:"post",
      body: JSON.stringify({name, price, category, company, userID }),
      headers:{
        'Content-type':'application/json'
      },
    })

    const data= await result.json();

    if(data){
      setSuccess(true);
      setName('');
      setCategory('');
      setPrice('');
      setCompany('');
      setError(false);


    }

  }

  
 

  
  
  return (
    <div>

<div className='text-center py-2'><h3>Add Product</h3></div>


<div className="container card   border-2 border-danger " style={{width: "18rem"}}>
<div className="card-body  ">

<h5 className="card-title" >Product Name</h5>
<input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='px-2' placeholder='enter your products'/>
 {error && !name && <span className='text-danger'>Enter valid name</span>}


<h5 className="card-title my-2 ">Price</h5>
<input type='text'value={price} onChange={(e)=>setPrice(e.target.value)} className='px-2 '  placeholder='enter your product-price'/>
{error && !price && <span className='text-danger'>Enter valid Price</span>}


<h5 className="card-title  my-2">Category</h5>
<input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} className='px-2' placeholder='enter product category'/>
{error && !category && <span className='text-danger'>Enter valid categoy</span>}


<h5 className="card-title  my-2">Company</h5>
<input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} className='px-2' placeholder='enter product company'/>
{error && !company && <span className='text-danger'>Enter valid company</span>}


</div>
</div>

<div className='text-center py-3 '>

<button type="button" className="btn btn-primary btn-md btn-block w-25  "onClick={addingProduct} >Add Product</button>
</div>



{success && <span className='text-center text-bg-success'>Product added successfully</span> }


    
    </div>
  )

}

export default AddProduct