import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Navbar = () => {
  let authorization= localStorage.getItem('user');
  const navigate=useNavigate();
  const LogOut=()=>{
    authorization=localStorage.clear();
    navigate('/signup')
  }
  return (
    <div >
        <nav className="navbar navbar-expand-lg  bg-success">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown ">

{
  authorization ? (
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link mx-2" to="/products" 
        style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>Products <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link mx-2" to="/add"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>AddProduct </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link mx-2" to="/update"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>UpdateProduct</NavLink>
      </li>
      

      <li className="nav-item">
        <NavLink className="nav-link mx-2" to="/profile"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>Profile</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link mx-2" to="/data"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>Data </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link mx-2 " to="/signup"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})} onClick={LogOut}>LogOut</NavLink>
       </li>

      </ul>

  ):
  
  (
    <ul className='navbar-nav'>

        <li className="nav-item ">
        <NavLink className="nav-link mx-2  " to="/signup"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>SignUp</NavLink>
        </li> 


        <li className="nav-item">
        <NavLink className="nav-link mx-2 " to="/login"style={({isActive})=>(isActive?
        {color:"black",fontWeight: "bold"}
        :{color:"white"})}>Login</NavLink>
        </li>
    </ul>
    
  )
}
    
   
  </div>
</nav>

    </div>
  )
}

export default Navbar