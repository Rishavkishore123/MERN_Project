
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import Updateproduct from './components/Updateproduct'
import LogOut from './components/LogOut'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import Data from './components/Data'

const App = () => {
  return (
    <div>

      <Navbar />
      
      <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path='/products' element={<Products/>}  />
      <Route path='/add' element={<AddProduct/>}  />
      <Route path='/update/:id' element={<Updateproduct/>}  />
      <Route path='/update' element={<h3>oops!! looks you are not authenticate</h3>}  />
      <Route path='/out' element={<LogOut/>}  />
      <Route path='/profile' element={<Profile/>}  />
      <Route path='/data' element={<Data/>}  />
      </Route>

      
      <Route path='/' element={<Signup/>}  />
      <Route path='/signup' element={<Signup/>}  />
      <Route path='/login' element={<Login/>}  />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
