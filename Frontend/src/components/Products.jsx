import React, { useEffect, useState } from 'react'

const Products = () => {

    const [productList, setProductList]= useState([]);

    useEffect(()=>{
      getproduct();
    },[])

   const getproduct=async ()=>{
    let result= await fetch('http://localhost:3001/product');
    result=await result.json();
    setProductList(result);
   }
    const deleteproduct=async (product_id)=>{
      let result= await fetch(`http://localhost:3001/product/${product_id}`,{
        method:"Delete"
      });
     if(result){
       getproduct();
     }
    }
   


  return (
    <>
    <div className='text-center py-4 '><h3>Products List</h3></div>
      
    <div className="container py-2 ">
  <div className="row">
    <div className="col-12 my-8">
      <table className="table table-bordered ">
        <thead className="bg-warning ">
          <tr className='border-2 border-primary '>
          <th className="font-weight-bold border-2 border-primary text-center bg-warning">S.No.</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Name</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Price</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Category</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Company</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item,index) => (
            <tr key={item._id} className="bg-danger text-white border-2 border-primary cursor-pointer ">
              <td className="border-2 border-primary text-center bg-body-secondary ">{index + 1}</td>
              <td className="border-2 border-primary text-center bg-body-secondary ">{item.name}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">Rs.{item.price}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">{item.category}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">{item.company}</td>
              <td className="border-2 border-primary text-center bg-body-secondary"><button className='' onClick={()=>deleteproduct(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
    </>
  )
}

export default Products;