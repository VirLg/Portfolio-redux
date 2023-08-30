import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate =useNavigate()
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="todo">ToDo</NavLink>
      <NavLink to="movie">Movie</NavLink>
      <NavLink to="users">Users</NavLink>
      <button onClick={()=>navigate('/login')}>Login</button>
    </>
  );
};

export default Header;
