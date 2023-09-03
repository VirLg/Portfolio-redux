import { delToken } from 'api/auth';
import { logOut } from 'components/redux/auth/slice';
import { authProfile, selectorIsAuth } from 'components/redux/selector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectorIsAuth);
  const isAuthProfile = useSelector(authProfile);
  const dispath = useDispatch;
  const handleLogOut = () => {
    dispath(logOut());
    // delToken();
  };
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="todo">ToDo</NavLink>
      <NavLink to="movie">Movie</NavLink>
      <NavLink to="users">Users</NavLink>
      <button
        onClick={() => {
          isAuth ? handleLogOut() : navigate('/login');
        }}
      >
        {isAuth ? 'Logout' : 'Login'}
      </button>
      <h4>{isAuthProfile && isAuthProfile.name}</h4>
    </>
  );
};

export default Header;
