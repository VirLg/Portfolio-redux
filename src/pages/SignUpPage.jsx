import { signUp } from 'api/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SignUpPage = () => {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const handleChange=(e)=>{
  (e.target.name==='name')?setName(e.target.value):(e.target.name==='email')?setEmail(e.target.value):setPassword(e.target.value)
}
const handleSubmit =(e)=>{
        console.log(name);
       
  e.preventDefault()
  const a = signUp({
    name,
    email,
    password,
    'avatar': "https://api.lorem.space/image/face?w=640&h=480&r=867",
  })
  console.log(a);
      }

  return (
    <form onSubmit={handleSubmit}>
       <label>
        Name
            <input 
            type="text" 
            name='name'
            onChange={handleChange}
            value={name}
            />
        </label>
        <label>
          Email
            <input 
            type="text" 
            name='email'
            onChange={handleChange}
            value={email}
            />
        </label>
        <label>
          Password
            <input type="text" 
            name='password'
            onChange={handleChange}
            value={password}
            />
        </label>
        <button type='submit'>SignUp</button>
        <Link to='/login'>Login</Link>
    </form>
  )
}

export default SignUpPage
