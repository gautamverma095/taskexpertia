import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie, hasCookie } from 'cookies-next';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import team from "../images/team.svg"
import Image from "../images/newteam.png"
import gear from "../images/gear.gif"
import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { userSignUpThunk } from '../redux/login/action';



const SignUp = () => {

    const [user, setUser] = useState({
        userName : "",
        email: "",
        password: "",
    })
  const navigate = useNavigate()
  const ref = useRef("")
 const dispatch = useDispatch()
  const { isLoading,token } = useSelector((state) => state.login)
  

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

  const handleSubmit = (e) => {
    e.preventDefault()
      if(user.userName == "" || user.email == "" || user.password == "")
      {
        alert("Please enter all details")
      }
      else {
        if (user.password != ref.current.value)
        {
          alert("Password does not match")
        }
        else {
          dispatch(userSignUpThunk(user))
          
        }
    }
        
    }
  useEffect(() => {
      
        if (hasCookie("token"))
        {
            navigate("/")
            }
        
    },[token])

  return (
   
    <div>
      <h1>Signup</h1>

      <Stack width={"400px"} margin ="auto" marginTop="5%"  >
      <form action="" onSubmit={handleSubmit}>
        
          <FormControl>
            
             <FormLabel>UserName</FormLabel>
          
            <Input name="userName" value={user.userName} onChange={handleChange} type='text' placeholder="enter userName" />
            
          <FormLabel>Email</FormLabel>
          
          <Input name ="email"  value = {user.email} onChange={handleChange} type='email' placeholder="enter email" />


           <FormLabel>Password</FormLabel>
          
            <Input name="password" value={user.password} onChange={handleChange} type='text' placeholder="enter password" />
            
              <FormLabel>Confirm Password</FormLabel>
          
            <Input  ref={ref} onChange={handleChange}  type='text' placeholder="confirm password" />

             <Input type='submit' value="Signup" />
            
               </FormControl>
      
      
      </form>
      
    
    
    </Stack>

      
     
    
    </div>
  )
}

export default SignUp