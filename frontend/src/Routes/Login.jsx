import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { setCookie, hasCookie } from 'cookies-next';
import { useSelector,useDispatch } from "react-redux"
import team from "../images/team.svg"
import Image from "../images/newteam.png"
import gear from "../images/gear.gif"
import { Link } from 'react-router-dom'
import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { userLoginThunk } from '../redux/login/action';

const Login = () => {

 const [user, setUser] = useState({
        userName : "",
        password: "",
    })
  const navigate = useNavigate()
  const ref = useRef("")
  const { isLoading, token } = useSelector((state) => state.login)
   const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

  const handleSubmit = (e) => {
    e.preventDefault()
      if(user.userName == "" || user.password == "")
      {
        alert("Please enter all details")
      }
      else {
       dispatch(userLoginThunk(user))
    }
        
    }

    if (hasCookie("token"))
        {
           return <Navigate to="/"/>
            }

  return (
       <div>
         <h1>Login</h1>

      <Stack width={"400px"} margin ="auto" marginTop="5%"  >
      <form action="" onSubmit={handleSubmit}>
        
        <FormControl>
          <FormLabel>UserName</FormLabel>
          
          <Input name ="userName"  value = {user.userName} onChange ={handleChange} type='text' placeholder="enter userName" />


           <FormLabel>Password</FormLabel>
          
            <Input name ="password"  value = {user.password} onChange={handleChange}  type='text' placeholder="enter password" />

             <Input type='submit' value="Login" />
          
               </FormControl>
      
      
      </form>
      
    
    
    </Stack>

      
     
    
    </div>      
  )
}

export default Login