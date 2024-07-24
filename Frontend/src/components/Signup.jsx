import React, {  useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
    const[name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState(false);
    const navigate= useNavigate();

    useEffect(()=>{
      const authorization= localStorage.getItem('user');
      if(authorization){
        navigate('/products')
      }
    },[])
    

    const collectData=async()=>{
      if(!name || !email || !password){
        setError(true);
        return false;
      }
      let result= await fetch('http://localhost:3001/signup',{
        method:"post",
        body: JSON.stringify({name,email,password}),
        headers:{
          'content-type':'application/json'
        },
      })
      result= await result.json();
        localStorage.setItem('user',JSON.stringify(result));
        navigate("/products")
 

    }
      
    
    

  return (
    <div>
        <div className='text-center py-4'><h3>Register</h3></div>


        <div className="container card   border-2 border-primary " style={{width: "18rem"}}>
        <div className="card-body  ">
        <h5 className="card-title">Name</h5>
        <input type='text 'className='px-4'value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name'/>
        {error && !name && <span className='text-danger'>Please Fill  the boxes</span>}
        <h5 className="card-title my-2 ">E-mail</h5>
        <input type='text' className='px-4 ' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your e-mail'/>
        {error && !email && <span className='text-danger'>please fill e-mail box</span>}
        <h5 className="card-title  my-2">Password</h5>
        <input type='password'className='px-4' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        {error && !password && <span className='text-danger'>please fill password box</span>}
       </div>
      </div>

      <div className='text-center py-3 '>

      <button type="button"onClick={collectData} className="btn btn-primary btn-md btn-block w-25  ">Sign-Up</button>
      
      </div>

      


    </div>
  )
}

export default Signup