import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="todo">ToDo</NavLink>
    </>
  );
};

export default Header;
