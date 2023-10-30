import { thunkLogin } from 'components/redux/auth/thunkUsers';
import { selectorIsAuth } from 'components/redux/selector';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const navigate = useNavigate();
  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispath(
      thunkLogin({
        email,
        password,
      })
    );
  };
  useEffect(() => {
    isAuth && navigate('/');
    isAuth && alert('Welcome');
  }, [isAuth, navigate]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      Login
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
        <Link to="/signUp">SignUp</Link>
      </form>
    </div>
  );
};

export default LoginPage;
