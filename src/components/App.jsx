import HomePage from 'pages/HomePage';
import ToDo from 'pages/ToDo';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Movie from 'pages/Movie';
import Users from 'pages/Users';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import Weathers from 'pages/Weathers';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="movie" element={<Movie />} />
          <Route path="users" element={<Users />} />
          <Route path="weather" element={<Weathers />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};
