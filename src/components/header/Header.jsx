import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="todo">ToDo</NavLink>
      <NavLink to="movie">Movie</NavLink>
      <NavLink to="users">Users</NavLink>
    </>
  );
};

export default Header;
