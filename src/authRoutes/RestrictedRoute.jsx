import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSlice';

 const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsLoggedIn);

  // console.log('RestrictedRoute - isAuth:', isAuth);

  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};
export default RestrictedRoute;