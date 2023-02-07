import { hasCookie } from 'cookies-next'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    if (!hasCookie("token"))
        {
            return <Navigate to="/login"/>
    }
    
    return children
 
}

export default PrivateRoute