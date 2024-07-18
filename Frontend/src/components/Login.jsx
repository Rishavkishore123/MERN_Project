import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        const authorization=localStorage.getItem('user');
        if(authorization){
            navigate('/products')
        }
    },[])
    
    

    const button=async ()=>{
        console.log("email, password",email,password);
        let result = await fetch('http://localhost:3001/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type':'application/json'
            },

        });
        result=await result.json();
        console.log(result);

        if(result.name){
           localStorage.setItem('user',JSON.stringify(result))
           navigate('/products')
        }else{
            alert('Please enter correct details')
        }
       
        
    }

  return (
    <div>
        <div><h3 className='text-center py-4'>LogIn Page</h3></div>

<div className="container card my-4 border-2 border-primary" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className='py-1'>E-mail</h5>
    <input type='text' className=''value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />

    <h5 className='py-1'>Password</h5>
    <input type='password' className='' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
  </div>
</div>

<div className='text-center py-0'>
<button type="button"onClick={button} className="btn btn-primary btn-md btn-block w-25  ">LogIn</button>
</div>
    </div>
  )
}

export default Login

