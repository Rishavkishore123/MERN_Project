import React, { useState } from 'react'

const UpdateProduct = () => {

  const [productname, setProductName]=useState('');
  const [price, setPrice]=useState('');
  const [category, setCategory]= useState('');
  const [company, setCompany]=useState('');
  const [error, setError]= useState(false);
  const [success, setSuccess]=useState(false);
  

  const updateProduct= ()=>{

   let result=({name:productname, price, category, company});
    console.log(result);

    if(result){
        setSuccess(true);
        setProductName('');
        setPrice('');
        setCategory('');
        setCompany('');
        
        
    }
    } 

  
  return (
    <div>

<div className='text-center py-2'><h3>Update Product</h3></div>


<div className="container card   border-2 border-success " style={{width: "18rem"}}>
<div className="card-body  ">

<h5 className="card-title" >Product Name</h5>
<input type='text' value={productname} onChange={(e)=>setProductName(e.target.value)} className='px-4' placeholder='enter your products'/>
 {error && !prodname && <span className='text-danger'>Enter valid name</span>}


<h5 className="card-title my-2 ">Price</h5>
<input type='text'value={price} onChange={(e)=>setPrice(e.target.value)} className='px-4 '  placeholder='enter your product-price'/>
{error && !price && <span className='text-danger'>Enter valid Price</span>}


<h5 className="card-title  my-2">Category</h5>
<input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} className='px-4' placeholder='enter product category'/>
{error && !category && <span className='text-danger'>Enter valid categoy</span>}


<h5 className="card-title  my-2">Company</h5>
<input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} className='px-4' placeholder='enter product company'/>
{error && !company && <span className='text-danger'>Enter valid company</span>}


</div>
</div>

<div className='text-center py-3 '>

<button type="button" className="btn btn-primary btn-md btn-block w-25  "onClick={updateProduct} >Update Product</button>

{success && <span className='bg-text-success'>Product updated successfully!</span>}

    </div>
    </div>
  )

}

export default UpdateProduct