import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/auth/authSlice';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsLoggedIn);

  return !isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
