import React, { useState } from 'react'

const AddProduct = () => {

  const [prodname, setProdName]=useState('');
  const [price, setPrice]=useState('');
  const [category, setCategory]= useState('');
  const [company, setCompany]=useState('');

  const addingProduct=async ()=>{
    let result= await fetch('http://localhost:3001/addproducts',{
      method:"post",
      body: JSON.stringify({prodname, price, category, company, }),
      headers:{
        'Content-type':'application/json'
      },
    })

    result= await result.json();



  }

  
  
  return (
    <div>

<div className='text-center py-2'><h3>Add Product</h3></div>


<div className="container card   border-2 border-danger " style={{width: "18rem"}}>
<div className="card-body  ">
<h5 className="card-title" >Product Name</h5>
<input type='text' value={prodname} onChange={(e)=>setProdName(e.target.value)} className='px-4' placeholder='enter your products'/>

<h5 className="card-title my-2 ">Price</h5>
<input type='text'value={price} onChange={(e)=>setPrice(e.target.value)} className='px-4 '  placeholder='enter your product-price'/>
<h5 className="card-title  my-2">Category</h5>
<input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} className='px-4' placeholder='enter product category'/>
<h5 className="card-title  my-2">Company</h5>
<input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} className='px-4' placeholder='enter product company'/>


</div>
</div>

<div className='text-center py-3 '>

<button type="button" className="btn btn-primary btn-md btn-block w-25  "onClick={addingProduct} >Add Product</button>

    </div>
    </div>
  )
}

export default AddProduct