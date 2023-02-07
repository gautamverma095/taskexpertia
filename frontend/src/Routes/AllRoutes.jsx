import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import SignUp from './SignUp'
import Task from './Task'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                         <PrivateRoute>
                        <Task/>
                         </PrivateRoute>
            } />
            <Route path='/login' element={ <Login/>}/>
            <Route path='/signup' element={
       
                <SignUp />
            } />
        
        </Routes>

            
  )
}

export default AllRoutes