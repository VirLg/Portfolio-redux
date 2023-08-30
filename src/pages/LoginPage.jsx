import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleChange=(e)=>{

(e.target.name==='email')?setEmail(e.target.value):setPassword(e.target.value)
}
    const handleSubmit =(e)=>{
e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <input 
            type="text" 
            name='email'
            onChange={handleChange}
            value={email}
            />
        </label>
        <label>
            <input type="text" 
            name='password'
            onChange={handleChange}
            value={password}
            />
        </label>
        <button type='submit'>Login</button>
        <Link to="/signUp">SignUp</Link>
    </form>
  )
}

export default LoginPage
