import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const handleChange=(e)=>{

  (e.target.name==='name')?setName(e.target.value):((e.target.name==='email')?setEmail(e.target.value):setPassword(e.target.value))
  }
      const handleSubmit =(e)=>{
  e.preventDefault()
      }

  return (
    <form onSubmit={handleSubmit}>
       <label>
            <input 
            type="text" 
            name='name'
            onChange={handleChange}
            value={name}
            />
        </label>
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
        <button type='submit'>SignUp</button>
        
    </form>
  )
}

export default SignUpPage
