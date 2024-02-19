import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Post from '../components/Post'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Logout from '../components/Logout'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            
        </Routes>
    </div>
  )
}

export default Routers