import React from 'react';
import { useDispatch } from 'react-redux';

import LoginRegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';

import { loginThunk } from '../../redux/auth/operations';
import { loginSchema } from '../../Schema/loginSchema';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(loginThunk(data));
  };

  return (
    <>
      <LoginRegisterForm
        formType={'login'}
        onDataSubmit={handleSubmit}
        schema={loginSchema}
      />
    </>
  );
};

export default Login;
